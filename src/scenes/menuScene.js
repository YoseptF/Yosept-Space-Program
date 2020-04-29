import Phaser from 'phaser';

const menuScene = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

  function SceneB() {
    Phaser.Scene.call(this, { key: 'sceneB' });
  },

  preload() {
    this.load.image('ball2', 'assets/sprites/shinyball.png');
  },

  create() {
    const playButton = this.add.text(100, 100, 'Play!', {
      color: '#000',
      backgroundColor: '#fff',
      fixedWidth: 250,
      fixedHeight: 70,
      align: 'center',
      baselineY: 0.525,
    });
    playButton.setInteractive({ useHandCursor: true });

    playButton.on('pointerdown', () => {
      this.scene.transition({ target: 'sceneA', duration: 2000 });
    }, this);

    playButton.on('pointerover', () => {
      playButton.setBackgroundColor('red');
    }, this);

    playButton.on('pointerout', () => {
      playButton.setBackgroundColor('white');
    }, this);

    this.matter.world.setBounds(0, 0, 800, 600, 32, true, true, false, true);

    for (let i = 0; i < 64; i++) {
      const ball = this.matter.add.image(Phaser.Math.Between(100, 700), Phaser.Math.Between(-600, 0), 'ball2');
      ball.setCircle();
      ball.setFriction(0.005);
      ball.setBounce(1);
    }
  },

});

export default menuScene;