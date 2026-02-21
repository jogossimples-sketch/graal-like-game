const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: { gravity: { y: 0 } }
    },
    scene: { preload: preload, create: create, update: update },
    pixelArt: true // Mantém os sprites nítidos
};
