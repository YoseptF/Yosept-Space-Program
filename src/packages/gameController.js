import Phaser from 'phaser';
import rocket from './rocket';
import { background, ground } from './enviroment';
import { gameUI } from './ui';
import { plane } from './enemies';

let player;
let grdd;
let spacebar;
let ArrowRight;
let ArrowLeft;
let ArrowDown;
let ArrowUp;
let bkgd;
let ui;
let pln;

const gameController = (scene) => {
  player = rocket(scene);
  bkgd = background(scene);
  grdd = ground(scene);
  ui = gameUI(scene);
  pln = plane(scene);

  const create = () => {
    bkgd.create();
    grdd.create();
    player.create();
    ui.create();

    spacebar = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    ArrowRight = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    ArrowLeft = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    ArrowDown = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    ArrowUp = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
  };

  const update = () => {
    scene.cameras.main.setBounds(player.x - 425, player.y - 700, 840, 450, true);
    bkgd.tilePositionX = player.x;
    bkgd.tilePositionY = player.y;
    grdd.tilePositionX = player.x;
    grdd.x = player.x;

    ui.update(player);

    if (ui.fuel >= 0) {
      if (Phaser.Input.Keyboard.JustDown(spacebar)) {
        ui.updateFuel(130);
        player.applyFuel(new Phaser.Math.Vector2(2, 2));
        pln.create(player.x + 5, player.y - 2680);
      }
      if (Phaser.Input.Keyboard.JustDown(ArrowRight)) {
        player.setAngularVelocity(0.02);
      }
      if (Phaser.Input.Keyboard.JustDown(ArrowLeft)) {
        player.setAngularVelocity(-0.02);
      }
      if (Phaser.Input.Keyboard.JustDown(ArrowDown)) {
        player.applyFuel(new Phaser.Math.Vector2(5, -1.5));
      }
      if (Phaser.Input.Keyboard.JustDown(ArrowUp)) {
        ui.updateFuel(5);
        player.applyFuel(new Phaser.Math.Vector2(5, 1.5));
      }
    }
  };

  return { create, update };
};

export default gameController;