const errorHandler = (res, err) => {
  if (err.name === 'CastError' || err.name === 'ValidationError') {
    res.status(400).send({ message: 'Переданы некорректные данные' });
  } else {
    res.status(500).send({ message: 'Произошла ошибка' });
  }
};

module.exports = errorHandler;
