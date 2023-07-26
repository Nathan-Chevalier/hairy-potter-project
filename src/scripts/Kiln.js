export const firePottery = (potteryInput, tempInput) => {
  let fired = potteryInput;
  potteryInput.kilnTemp = tempInput;
  potteryInput.fired = true;
  if (tempInput > 2200) {
    potteryInput.cracked = true;
  } else {
    potteryInput.cracked = false;
  }
  return fired;
};
