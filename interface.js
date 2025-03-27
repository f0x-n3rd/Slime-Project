let screenButtons = document.querySelectorAll('.screenButton');

function screenTransition(targetScreenID) {
    document.querySelectorAll('div').forEach(screen => {
        screen.style.display = 'none';
    });

    document.getElementById(targetScreenID).style.display = 'block';

    if (targetScreenID === "gameScreen") {
        startPhaser();
    } else {
        stopPhaser();
    }
}

screenButtons.forEach(button => {
    button.addEventListener('click', () => {
        let targetScreen = button.getAttribute('data-screen');
        screenTransition(targetScreen);
    });
});
