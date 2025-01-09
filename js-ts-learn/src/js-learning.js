const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3],
]);

// Using forEach
map.forEach(
    (value, key) => {
    console.log(`${key}: ${value}`);
});

