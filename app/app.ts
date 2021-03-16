function startGame() {
    // starting a new game
    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to Form-ULA! Starting new game...';
}

document.getElementById('startGame')!.addEventListener('click', startGame);