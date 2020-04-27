import Phaser from 'phaser';

const fuelBar = (scene, x, y) => {
  const bar = new Phaser.GameObjects.Graphics(scene);
  bar.setScrollFactor(0, 0);

  let value = 0;
  scene.add.existing(bar);


  const draw = () => {
    bar.clear();

    //  BG
    bar.fillStyle(0x000000);
    bar.fillRect(x, y, 26, 260);

    //  Health

    bar.fillStyle(0x00ff00);
    bar.fillRect(x + 2, y + 2, 22, 256);


    bar.fillStyle(0xff0000);

    bar.fillRect(x + 2, y + 2, 22, value - 4);
  };

  const decrease = (amount) => {
    value += amount;

    if (value > 260) {
      value = 260;
    }

    draw();

    return (value === 0);
  };

  return { draw, decrease };
};


export default fuelBar;