import Phaser from 'phaser';
import './sass/style.scss';
import ball from './images/ball.png';
import sky from './images/sky.png';
import ground from './images/grounds.png';
import transparent from './images/transparent.png';

let ballA;
let grounded;
let groundedTexture;
let background;

function preload() {
  this.load.image('ball', ball);
  this.load.image('sky', sky);
  this.load.image('ground', ground);
  this.load.image('transparent', transparent);
}

function create() {
  background = this.add.tileSprite(400, 300, 1920, 1080, 'sky');
  background.setScrollFactor(0, 0);
  groundedTexture = this.add.tileSprite(400, 2015, 500, 200, 'ground');

  console.log(groundedTexture.x);

  grounded = this.matter.add.image(100, 1980, 'transparent', null, {
    shape: 'rectangle', friction: 0.005, restitution: 0.6, isStatic: true,
  });

  ballA = this.matter.add.image(420, 100, 'ball', null, { shape: 'circle', friction: 0.005, restitution: 0.6 });


  //  Our two bodies which will be connected by a constraint (aka a Joint or a Spring)


  // const constraint = Phaser.Physics.Matter.Matter.Constraint.create({
  //   bodyA: ballA.body,
  //   bodyB: ballB.body,
  //   length: 100,
  //   stiffness: 0.2,
  // });
  //
  // this.matter.world.add(constraint);

  this.matter.add.mouseSpring();
}

const times = 0;

function update() {
  console.log(this.cameras.main.x);
  this.cameras.main.setBounds(ballA.x - 425, ballA.y - 700, 840, 450, true);
  background.tilePositionX = ballA.x;
  background.tilePositionY = ballA.y;
  groundedTexture.tilePositionX = ballA.x;
  groundedTexture.x = ballA.x;
  grounded.x = ballA.x - 200;
}

const config = {
  type: Phaser.AUTO,
  width: 450,
  height: 840,
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