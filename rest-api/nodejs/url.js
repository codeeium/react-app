const url = require('url');
const myUrl = new URL('https://example.com/path?id=100');
console.log(myUrl.hostname);
console.log(myUrl.searchParams.get('id'));
