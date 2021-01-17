const express = require('express');
const router = require('./routes');
const app = express();

const { PORT = 3000 } = process.env;

app.use('/', express.static(__dirname + '/public'));

app.use('/', router);
app.use('*', (req, res) => {
  return res.status(404).send({ "message": "Запрашиваемый ресурс не найден" });
});

app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`);
});