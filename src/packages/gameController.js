import Phaser from 'phaser';
import rocket from './rocket';
import { background, ground } from './enviroment';
import UI from './ui';

let player;
let grdd;
let spacebar;
let ArrowRight;
let ArrowLeft;
let ArrowDown;
let bkgd;
let ui;

const gameController = (scene) => {
  player = rocket(scene);
  bkgd = background(scene);
  grdd = ground(scene);
  ui = UI(scene);

  const create = () => {
    bkgd.create();
    grdd.create();
    player.create();
    ui.create();

    spacebar = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    ArrowRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    ArrowLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    ArrowDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
  };

  const update = () => {
    scene.cameras.main.setBounds(player.x - 425, player.y - 700, 840, 450, true);
    bkgd.tilePositionX = player.x;
    bkgd.tilePositionY = player.y;
    grdd.tilePositionX = player.x;
    grdd.x = player.x;
    ui.update(player);

    if (Phaser.Input.Keyboard.JustDown(spacebar)) {
      ui.updateFuel(130);
      player.applyFuel(new Phaser.Math.Vector2(5, 5));
    }
    if (Phaser.Input.Keyboard.JustDown(ArrowRight)) {
      ui.updateFuel(10);
      player.applyForce(new Phaser.Math.Vector2(0.15, 0));
    }
    if (Phaser.Input.Keyboard.JustDown(ArrowLeft)) {
      ui.updateFuel(10);
      player.applyForce(new Phaser.Math.Vector2(-0.15, 0));
    }
    if (Phaser.Input.Keyboard.JustDown(ArrowDown)) {
      ui.updateFuel(10);
      player.applyForce(new Phaser.Math.Vector2(0, 0.15));
    }
  };

  return { create, update };
};

export default gameController;