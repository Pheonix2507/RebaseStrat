document.getElementById('randomBtn').addEventListener('click', function() {
    const messages = [
        'Hello, World!',
        'You clicked the button!',
        'Random message: Have a great day!',
        'This is a base project.',
        'Keep coding!'
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
});