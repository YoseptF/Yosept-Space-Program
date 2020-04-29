import Phaser from 'phaser';
import './sass/style.scss';
import { menuScene, gameScene } from './scenes/sceneLoader';

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 840,
  backgroundColor: '#1b1464',
  parent: 'phaser-example',
  scene: [menuScene, gameScene],
  physics: {
    default: 'matter',
    matter: {
      gravity: {
        x: 0,
        y: 1,
      },
      plugins: {
        attractors: true,
      },
      debug: true,
    },
  },
};

const game = new Phaser.Game(config);