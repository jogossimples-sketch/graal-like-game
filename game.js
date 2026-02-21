let game;
let player;
let cursors;

function preload() {
    // NÃO PRECISA DE ARQUIVOS EXTERNOS!
}

function create() {
    // Desenhar mapa de grama diretamente
    this.graphics = this.add.graphics();
    for (let x=0; x<20; x++) {
        for (let y=0; y<15; y++) {
            this.graphics.fillStyle(0x28a038); // Verde da grama
            this.graphics.fillRect(x*32, y*32, 32, 32);
            this.graphics.fillStyle(0x208028); // Detalhes mais escuros
            this.graphics.fillRect(x*32 + 4, y*32 + 4, 4, 4);
            this.graphics.fillRect(x*32 + 24, y*32 + 24, 4, 4);
        }
    }

    // Criar personagem diretamente (sem spritesheet)
    player = this.physics.add.sprite(400, 300, null);
    player.setCollideWorldBounds(true);
    player.displayWidth = 32;
    player.displayHeight = 48;

    // Desenhar personagem na tela
    this.playerGraphics = this.add.graphics();
    this.drawPlayer = () => {
        this.playerGraphics.clear();
        // Corpo azul
        this.playerGraphics.fillStyle(0x1e90ff);
        this.playerGraphics.fillEllipse(16, 24, 24, 32);
        // Rosto branco
        this.playerGraphics.fillStyle(0xffffff);
        this.playerGraphics.fillEllipse(16, 18, 18, 18);
        // Olhos pretos
        this.playerGraphics.fillStyle(0x000000);
        this.playerGraphics.fillEllipse(12, 16, 4, 4);
        this.playerGraphics.fillEllipse(20, 16, 4, 4);
        // Posicionar no player
        this.playerGraphics.x = player.x - 16;
        this.playerGraphics.y = player.y - 24;
    };

    // Controles
    cursors = this.input.keyboard.createCursorKeys();
}

function update() {
    // Movimento
    player.setVelocity(0);
    if (cursors.left.isDown) {
        player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
        player.setVelocityX(160);
    } else if (cursors.up.isDown) {
        player.setVelocityY(-160);
    } else if (cursors.down.isDown) {
        player.setVelocityY(160);
    }

    // Redesenhar personagem
    this.drawPlayer();
}

// Inicializar jogo
window.onload = () => {
    game = new Phaser.Game({
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: { default: 'arcade' },
        scene: { preload: preload, create: create, update: update }
    });
};
                                   
