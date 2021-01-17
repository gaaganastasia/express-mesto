const fs = require('fs').promises;

const readJson = (path) => {
  return fs.readFile(path)
    .catch(err => {
      throw `file ${path} not found`;
    })
    .then((data) => {
      try{
        return JSON.parse(data);
      }
      catch (_) {
        throw 'error: JSON is invalid';
      }
    })
}

module.exports = readJson;