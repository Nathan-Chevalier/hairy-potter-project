let potteryId = 1;

export const makePottery = (shapeValue, weightValue, heightValue) => {
  const pottery = {
    shape: shapeValue,
    weight: weightValue,
    height: heightValue,
    id: potteryId,
  };
  potteryId += 1;
  return pottery;
};
