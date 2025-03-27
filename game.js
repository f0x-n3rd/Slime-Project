let game; // Global game instance

function startPhaser() {
    if (game) return; // Prevent multiple Phaser instances

    let config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: "gameScreen",
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    game = new Phaser.Game(config);
}

function stopPhaser() {
    if (game) {
        game.destroy(true);
        game = null;
    }
}

function preload() {
    console.log("Phaser is working!");
}

function create() {
    console.log("Game scene created!");
}

function update() {
    console.log("Game is updating...");
}
