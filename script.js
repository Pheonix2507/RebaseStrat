document.getElementById('randomBtn').addEventListener('click', function() {
    const messages = [
        'Changing texts to check!',
        'Checking for the commits in this new branch as well!',
        'Random message lets see for this great day!',
        'This is a base project.',
        'Keep coding further editing the code to check and merges!'
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('message').textContent = messages[randomIndex];
});