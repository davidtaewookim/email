const fs = require('fs');
const path = require('path');

const readJSON = () => {
  const readFiles = (dirName = './') => new Promise((resolve, reject) => {
    fs.readdir(dirName, (err, files) => {
      if (err) return reject(err);
      const jsons = files
        .filter(file => file.match(/\.(json)$/i))
        .map(file => new Promise((innerResolve, innerReject) => {
          fs.readFile(path.resolve(dirName, file), (readFileErr, data) => {
            if (readFileErr) return innerReject(readFileErr);
            try {
              const json = JSON.parse(data);
              return innerResolve(json);
            } catch (e) {
              return innerReject(e);
            }
          });
        }));
      return resolve(Promise.all(jsons));
    });
  });
  return readFiles();
};

const requestObject = {
  sender: 'test-sender@mail.com',
  recipients: ['1@mail.com', '2@mail.com', '3@mail.com'],
  subject: 'test-subject',
  contents: 'hi this is just test',
};

const createMailObject = (result, provider, requestObject) => {
  const pick = result.filter(e => e.provider === provider);
  // if the pick is not 1, something is wrong
  const result = createEmail(pick[0], requestObject);
  return pick;
};

// readJSON('mailgun').then(result => console.log(result));

readJSON().then((result) => {
  const in01 = createMailObject(result, 'sendgrid', requestObject);
  console.log(in01);
});

// const result = readJSON();
// console.log(result);

// const result02 = (async () => {
//   const fin = await (await (await final('sendgrid')));
//   console.log(fin);
//   return fin;
// })();
// console.log('haha');
// console.log(result02);
// console.log('end');
