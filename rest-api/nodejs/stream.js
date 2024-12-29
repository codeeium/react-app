const fs = require('fs');

const readStream = fs.createReadStream('hello.txt');

readStream.on('data', chunk => {
    console.log(chunk.toString());
});
