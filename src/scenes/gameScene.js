import Phaser from 'phaser';
import gameController from '../packages/gameController';

let gmController;
const gameScene = new Phaser.Class({

  Extends: Phaser.Scene,

  initialize:

  function SceneA() {
    Phaser.Scene.call(this, { key: 'sceneA' });
  },

  preload() {
    gmController = gameController(this);
  },

  create() {
    gmController.create();
  },

  update() {
    gmController.update();
  },

});

export default gameScene;