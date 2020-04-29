import Phaser from 'phaser';
import './sass/style.scss';
import gameController from './packages/gameController';

let gmController;

function preload() {
  gmController = gameController(this);
}

function create() {
  gmController.create();

  //  Our two bodies which will be connected by a constraint (aka a Joint or a Spring)


  // const constraint = Phaser.Physics.Matter.Matter.Constraint.create({
  //   bodyA: ballA.body,
  //   bodyB: ballB.body,
  //   length: 100,
  //   stiffness: 0.2,
  // });
  //
  // this.matter.world.add(constraint);

  // this.matter.add.mouseSpring();
}

function update() {
  gmController.update();
}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 840,
  backgroundColor: '#1b1464',
  parent: 'phaser-example',
  physics: {
    default: 'matter',
    matter: {
      gravity: {
        x: 0,
        y: 2,
      },
      plugins: {
        attractors: true,
      },
      debug: true,
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);