import Phaser from 'phaser';

const fuelBar = (scene, x, y, initialFuel) => {
  let fuelNow = initialFuel;
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

    bar.fillRect(x + 2, y + 2, 22, value - 3);
  };

  const decrease = (amount) => {
    value += amount;

    if (value > 260) {
      value = 260;
    }

    draw();

    return (value === 0);
  };

  return {
    draw,
    decrease,
    get fuelNow() { return fuelNow; },
    set fuelNow(newFuel) { fuelNow = newFuel; },
  };
};

const gameUI = (scene) => {
  let FuelUI;
  let heightUI;
  let fuelSpent = 0;
  const create = () => {
    FuelUI = fuelBar(scene, 400, 300, 260);

    FuelUI.draw();

    scene.add.existing(FuelUI);

    heightUI = scene.add.text(325, 440, 'Heigh: 10000', {
      fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#fff', stroke: '#000', strokeThickness: 3, fontSize: '18px',
    });
    heightUI.setScrollFactor(0, 0);
  };

  const updateFuel = (units) => {
    fuelSpent += units;
    FuelUI.fuelNow -= units;
  };

  const update = (player) => {
    console.log(FuelUI.fuelNow);
    heightUI.text = `Height: ${-Math.floor(player.y - 1858)} m`;
    if (fuelSpent) {
      FuelUI.decrease(1);
      fuelSpent -= 1;
    }
  };

  return {
    create,
    updateFuel,
    update,
    get fuel() { return FuelUI.fuelNow; },
  };
};

const MenuUI = () => {

};

export { gameUI, MenuUI };