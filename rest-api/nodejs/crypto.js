const crypto = require('crypto');

const hash = crypto.
createHash('sha256').
update('password').
digest('hex');

console.log(hash);
