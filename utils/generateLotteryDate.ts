// TODO: update start date and intervals

export const firstLottery = new Date(Date.UTC(2023, 0, 25, 23, 41, 0, 0)); 
export const secondLottery = new Date(Date.UTC(2023, 0, 28, 2, 0, 0, 0)); 
export const numberOfTestLotteries = 1;
const hour = 60 * 60 * 1000;

const missedLotteryDraws:number[] = [];

export const generateLotteryDate = (issueIndex: number): Date => {
  if (issueIndex == 0) return  new Date(firstLottery);
  const lotteryDate = new Date(secondLottery);

  const missed = missedLotteryDraws.reduce((t, ii)=>{ return issueIndex>=ii ? t+1 : t; }, 0)

  lotteryDate.setTime(lotteryDate.getTime() + (issueIndex - numberOfTestLotteries + missed) * 72 * hour);
  
  return lotteryDate;
};
