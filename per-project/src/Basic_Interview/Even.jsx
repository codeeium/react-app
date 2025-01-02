
<button onClick={handleClick}>Click me
</button>

function handleClick() {
    alert('Button clicked!');
}
<button onClick={handleClick}>Click me
</button>

function handleClick(event) {
    console.log(event); // Access event properties
}
<button onClick={handleClick}>Click me
</button>

function MyComponent() {
    const handleClick = () => {
        console.log(this); // No need for bind
    };

    return <button onClick={handleClick}>Click me</button>;
}

function handleClick2(event) {
    event.persist(); // Keeps the event object around for later use
    setTimeout(() => {
        console.log(event); // Access the event object later
    }, 1000);
}

<button onClick={handleClick}>Click me</button>;


