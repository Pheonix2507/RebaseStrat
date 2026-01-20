document.getElementById('randomBtn').addEventListener('click', function() {
    const messages = [
        'Changing texts to check!',
        'You clicked the button!',
        'Random message: Have a great day!',
        'This is a base project.',
        'Keep coding further editing the code to check and merges!'
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
});