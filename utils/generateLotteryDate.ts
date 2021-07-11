// TODO: update start date and intervals

export const firstLottery = new Date(Date.UTC(2021, 7, 4, 4, 36, 23, 0)); 
export const secondLottery = new Date(Date.UTC(2021, 7, 5, 23, 27, 16, 0)); 
export const thirdLottery = new Date(Date.UTC(2021, 7, 5, 23, 56, 13, 0)); 
export const forthLottery = new Date(Date.UTC(2021, 7, 7, 2, 0, 0, 0)); 
export const numberOfTestLotteries = 3;
const hour = 60 * 60 * 1000;
export const generateLotteryDate = (issueIndex: number): Date => {
  if (issueIndex == 0) return  new Date(firstLottery);
  else if (issueIndex == 1) return  new Date(secondLottery);
  else if (issueIndex == 2) return  new Date(thirdLottery);
  const lotteryDate = new Date(forthLottery);

  lotteryDate.setTime(lotteryDate.getTime() + (issueIndex - numberOfTestLotteries) * 72 * hour);
  
  return lotteryDate;
};
