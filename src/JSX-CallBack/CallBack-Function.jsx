// CallBack-Function.js
export

const greet = (name, callback) => {
    return `Hello, ${name}! ${callback(name)}`;
};

export const sayGoodbye = (name) => {
    return `Goodbye, ${name}!`;
};
