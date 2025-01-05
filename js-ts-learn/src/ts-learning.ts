export {}

type Answer = string;

import readline from 'readline'; // Use import instead of require

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What do you think of Node.js? ', (userAnswer: Answer) => {
    console.log(`Thank you for your valuable feedback: ${userAnswer}`);
    rl.close();
});

rl.on('close', () => {
    process.exit(0); // Ensure the process exits after the readline interface is closed
});
