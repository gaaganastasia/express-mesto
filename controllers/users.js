const User = require('../models/user');
const errorHandler = require('../utils/utils');

const getUsers = (req, res) => {
  User.find({})
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getUser = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (user) {
        res.send(user);
      } else {
        res.status(404).send({ message: 'User is not found' });
      }
    })
    .catch((err) => {
      errorHandler(res, err);
    });
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;

  User.create({ name, about, avatar })
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      errorHandler(res, err);
    });
};

const updateProfileInfo = (req, res) => {
  const { name, about } = req.body;

  User.findByIdAndUpdate(req.user._id, { name, about }, { new: true, runValidators: true })
    .then((user) => {
      if (name && about) {
        res.send(user);
      } else {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      }
    })
    .catch((err) => {
      errorHandler(res, err);
    });
};

const updateProfileAvatar = (req, res) => {
  const { avatar } = req.body;

  User.findByIdAndUpdate(req.user._id, { avatar }, { new: true, runValidators: true })
    .then((user) => {
      if (avatar) {
        res.send(user);
      } else {
        res.status(400).send({ message: 'Переданы некорректные данные' });
      }
    })
    .catch((err) => {
      errorHandler(res, err);
    });
};

module.exports = {
  getUsers, getUser, createUser, updateProfileInfo, updateProfileAvatar,
};
