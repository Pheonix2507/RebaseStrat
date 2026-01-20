document.getElementById('randomBtn').addEventListener('click', function() {
    const messages = [
        'Changing texts to check!',
        'wil it fail!',
        'Random message lets see for this great day!',
        'This is a base project.',
        'changing the text to check more!'
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
});