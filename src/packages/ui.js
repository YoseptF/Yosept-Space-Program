import fuelBar from './fuel';

const UI = (scene) => {
  let FuelUI;
  let heightUI;
  let fuelSpent = 0;
  const create = () => {
    FuelUI = fuelBar(scene, 400, 300);

    FuelUI.draw();

    scene.add.existing(FuelUI);

    heightUI = scene.add.text(325, 440, 'Heigh: 10000', {
      fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', color: '#fff', stroke: '#000', strokeThickness: 3, fontSize: '18px',
    });
    heightUI.setScrollFactor(0, 0);
  };

  const updateFuel = (units) => {
    fuelSpent += units;
  };

  const update = (player) => {
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
  };
};

export default UI;