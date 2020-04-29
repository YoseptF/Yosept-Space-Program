import planeImage from '../images/plane.png';

const plane = (scene) => {
  let planeBody;
  scene.load.image('plane', planeImage);

  const create = (x, y) => {
    planeBody = scene.matter.add.image(x, y, 'plane', null, { shape: 'rectangle', friction: 0.005, restitution: 0.6 });
    console.log(planeBody);
  };

  return { create };
};

const helicopter = () => {

};

export { plane, helicopter };