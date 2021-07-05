// TODO: update start date and intervals

export const firstLottery = new Date(Date.UTC(2021, 7, 4, 4, 36, 23, 0)); 
export const secondLottery = new Date(Date.UTC(2021, 7, 5, 4, 36, 23, 0));   // To be modified later
export const thirdLottery = new Date(Date.UTC(2021, 7, 8, 2, 0, 0, 0)); 
export const numberOfTestLotteries = 2;
const hour = 60 * 60 * 1000;
export const generateLotteryDate = (issueIndex: number): Date => {
  if (issueIndex == 0) return  new Date(firstLottery);
  else if (issueIndex == 1) return  new Date(secondLottery);
  const lotteryDate = new Date(thirdLottery);

  lotteryDate.setTime(lotteryDate.getTime() + (issueIndex - numberOfTestLotteries) * 36 * hour);
  
  return lotteryDate;
};
