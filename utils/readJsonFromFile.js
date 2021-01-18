const fs = require('fs').promises;

const readJson = (path) => fs.readFile(path)
  .catch(() => {
    const fileErr = { message: `file ${path} not found` };
    throw fileErr;
  })
  .then((data) => {
    try {
      return JSON.parse(data);
    } catch (_) {
      const jsonErr = { message: 'JSON is invalid' };
      throw jsonErr;
    }
  });

module.exports = readJson;
