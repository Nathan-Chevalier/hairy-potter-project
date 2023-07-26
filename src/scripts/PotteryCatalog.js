let toSell = [];

export const toSellOrNotToSell = (pottery) => {
  let appraised = pottery;
  if (appraised.weight >= 6 && appraised.cracked === false) {
    appraised.price = 40;
    toSell.push(appraised);
    return appraised;
  } else if (appraised.weight < 6 && appraised.cracked === false) {
    appraised.price = 20;
    toSell.push(appraised);
    return appraised;
  }
  return appraised;
};

export const usePottery = () => {
  return toSell.map((potteryToSell) => ({ ...potteryToSell }));
};
