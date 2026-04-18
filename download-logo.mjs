import https from 'node:https';
import fs from 'node:fs';

const id = '1xLi3e6H-cq-5oGU3Ul88S7XXsO-NrG9x';
const url = `https://drive.google.com/uc?export=download&id=${id}`;

https.get(url, (res) => {
  if (res.statusCode === 302 || res.statusCode === 303) {
    https.get(res.headers.location, (res2) => {
      const file = fs.createWriteStream('./public/logo.png');
      res2.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded logo.png');
      });
    });
  } else {
    const file = fs.createWriteStream('./public/logo.png');
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Downloaded logo.png directly');
    });
  }
}).on('error', (err) => {
  console.error('Error downloading:', err.message);
});
