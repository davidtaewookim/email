const fs = require('fs');
const path = require('path');
// read files in JSON folder
// create provider object from JSON

// const readJSON = require('../readJSON');

const readJSON = (provider) => {
  const readFiles = dirName => new Promise((resolve, reject) => {
    fs.readdir(dirName, (err, files) => {
      if (err) return reject(err);
      const jsons = files.map((file) => {
        fs.readFile(path.resolve(dirName, file), (readFileErr, data) => {
          if (readFileErr) return reject(readFileErr);
          const json = JSON.parse(data);
          return resolve(json);
        });
      });
      return resolve(Promise.all(jsons));
    });
  });
};

const createProvider = (provider, object) => {
  const profile = readJSON(provider);
  const returnProfile = profile(object);
  return returnProfile;
};

module.exports = createProvider;
