const { exec } = require('child_process');
exec('ls', (err, stdout) => {
    console.log(stdout);
});
