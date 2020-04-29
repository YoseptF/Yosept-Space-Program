import sky from '../images/sky.png';
import groundTexture from '../images/grounds.png';
import transparent from '../images/transparent.png';

const background = (scene) => {
  let backgroundBody;
  scene.load.image('sky', sky);


  const create = () => {
    backgroundBody = scene.add.tileSprite(400, 300, 1920, 1080, 'sky');
    backgroundBody.setScrollFactor(0, 0);
  };

  return {
    create,
    set tilePositionX(newPos) { backgroundBody.tilePositionX = newPos; },
    set tilePositionY(newPos) { backgroundBody.tilePositionY = newPos; },
  };
};

const ground = (scene) => {
  let groundedTexture;
  let grounded;
  scene.load.image('ground', groundTexture);
  scene.load.image('transparent', transparent);

  const create = () => {
    groundedTexture = scene.add.tileSprite(400, 2015, 500, 200, 'ground');

    grounded = scene.matter.add.image(100, 1980, 'transparent', null, {
      shape: 'rectangle', friction: 0.005, restitution: 0.6, isStatic: true,
    });
  };

  return {
    create,
    set tilePositionX(newPos) { groundedTexture.tilePositionX = newPos; },
    set x(newPos) {
      grounded.x = newPos;
      groundedTexture.x = newPos;
    },
  };
};

export { background, ground };