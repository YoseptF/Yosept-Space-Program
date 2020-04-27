import Phaser from 'phaser';
import './sass/style.scss';
import ball from './images/ball.png';
import sky from './images/sky1.png';

let ballA;
let ballB;
let background;
const iter = 0;

function preload() {
  this.load.image('ball', ball);
  this.load.image('sky', sky);
}

function create() {
  this.matter.world.setBounds(0, 0, 800, 600, 64, false, false, false, true);
  background = this.add.tileSprite(400, 300, 1920, 1080, 'sky');

  background.setScrollFactor(0, 0);

  //  Our two bodies which will be connected by a constraint (aka a Joint or a Spring)

  ballA = this.matter.add.image(420, 100, 'ball', null, { shape: 'circle', friction: 0.005, restitution: 0.6 });
  ballB = this.matter.add.image(400, 200, 'ball', null, { shape: 'circle', friction: 0.005, restitution: 0.6 });

  console.log(Phaser.Physics.Matter.Matter.Render);

  //  You can create a constraint between the two bodies using a Factory function.
  //  The value 100 is the resting length and 0.2 is the stiffness of the constraint.

  //   this.matter.add.constraint(ballA, ballB, 100, 0.2);

  //  To help those of you more used to the Box2D syntax you can use
  //  add.joint or add.spring instead (with the exact same parameters)

  // this.matter.add.spring(ballA, ballB, 100, 0.2);
  // this.matter.add.joint(ballA, ballB, 100, 0.2);

  //  Or you can create a native Matter constraint:

  const constraint = Phaser.Physics.Matter.Matter.Constraint.create({
    bodyA: ballA.body,
    bodyB: ballB.body,
    length: 100,
    stiffness: 0.2,
  });

  //  Which you then have to add to the world yourself:

  this.matter.world.add(constraint);

  this.matter.add.mouseSpring();
}

function update() {
  this.cameras.main.setBounds(ballA.x - 400, ballA.y - 400, 800, 600, true);
  background.tilePositionX = ballA.x;
  background.tilePositionY = ballA.y;
}

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1b1464',
  parent: 'phaser-example',
  physics: {
    default: 'matter',
  },
  scene: {
    preload,
    create,
    update,
  },
};

const game = new Phaser.Game(config);