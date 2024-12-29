const path = require('path');
console.log(path.join(__dirname, 'public', 'index.html'));

const fs = require('fs');
const filePath = path.join(__dirname, 'public', 'index.html');
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('File content:', data);
    }
});