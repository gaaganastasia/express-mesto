const path = require('path');
const readJson = require('../utils/readJsonFromFile');

const fileName = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  readJson(fileName)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const getUser = (req, res) => {
  const { id } = req.params;

  readJson(fileName)
    .then((users) => {
      const foundUser = users.find((user) => user._id === id);
      if (!foundUser) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(foundUser);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getUsers, getUser,
};
