const sharp = require("sharp");

const fs = require("fs");

fs.readdir("svg", (err, files) => {
  files.forEach((file) => {
    console.log(file);
    sharp('./svg/'+file)
      .png()
      .toFile('./png/'+file.replace('.svg', '.png'))
      .then(function (info) {
        console.log(info);
      })
      .catch(function (err) {
        console.log('converter',err);
      });
  });
});
