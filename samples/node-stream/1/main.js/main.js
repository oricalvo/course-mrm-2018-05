const fs = require("fs");
const zlib = require("zlib");

fs.createReadStream("main.js")
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream("main.js.gz"));


