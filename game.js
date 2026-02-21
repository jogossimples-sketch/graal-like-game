let game;
let player;
let cursors;

function preload() {
    // Carregar assets (adicione os arquivos na pasta assets/sprites/)
    this.load.spritesheet('player', 'assets/sprites/player.png', { frameWidth: 32, frameHeight: 48 });
    this.load.image('mapTile', 'assets/sprites/grass_tile.png');
}

function create() {
    // Mapa básico
    const map = this.make.tilemap({ width: 20, height: 15, tileWidth: 32, tileHeight: 32 });
    const tileset = map.addTilesetImage('mapTile');
    const layer = map.createLayer(0, tileset, 0, 0);

    // Personagem
    player = this.physics.add.sprite(400, 300, 'player');
    player.setCollideWorldBounds(true);

    // Animações
    this.anims.create({ key: 'left', frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'right', frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'up', frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }), frameRate: 10, repeat: -1 });
    this.anims.create({ key: 'down', frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }), frameRate: 10, repeat: -1 });

    // Controles
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Movimento
    player.setVelocity(0);
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
        player.anims.play('right', true);
    } else if (cursors.up.isDown) {
        player.setVelocityY(-160);
        player.anims.play('up', true);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
        player.anims.play('down', true);
    } else {
        player.anims.stop();
    }
}

window.onload = () => { game = new Phaser.Game(config); };
      
