// This file contains the worker logic
self.onmessage = function (e) {
    const number = e.data;
    let result = 0;

    // Simulate heavy computation (e.g., factorial)
    for (let i = 0; i < number; i++) {
        result += i;
    }

    // Send result back to main thread
    self.postMessage(result);
};
