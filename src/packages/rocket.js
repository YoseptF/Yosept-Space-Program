import Phaser from 'phaser';
import rocketImage from '../images/rocket.png';

const rocket = (scene) => {
  let rocketBody;
  scene.load.image('rocket', rocketImage);

  const create = () => {
    rocketBody = scene.matter.add.image(0, 1850, 'rocket', null, { shape: 'circle', friction: 0.005, restitution: 0.6 });
  };

  const applyFuel = (force) => {
    const mangle = rocketBody.angle > 0 ? rocketBody.angle : 360 + rocketBody.angle;
    const angleX = Math.sin(mangle * 0.0174533);
    const angleY = Math.cos(mangle * 0.0174533);

    // rocketBody.applyForce(angleX * 60, -(angleY * 60));
    rocketBody.applyForce(force.multiply(new Phaser.Math.Vector2(angleX, -angleY)));

    scene.cameras.main.shake(75, 0.05);
  };

  const applyForce = (force) => { rocketBody.applyForce(force); };

  return {
    create,
    get x() { return rocketBody.x; },
    get y() { return rocketBody.y; },
    get angle() { return rocketBody.angle; },
    applyForce,
    applyFuel,
  };
};

export default rocket;