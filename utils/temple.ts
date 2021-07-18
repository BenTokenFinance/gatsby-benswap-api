import { PromisifyBatchRequest } from "../lib/PromiseBatchRequest";
import { TEMPLE_CONTRACT } from "./constants";
import { getContract, getLatestBlock} from "./web3";
import templeABI from "./abis/temple.json";

const START_BLOCK = 9188546;
const BLOCK_RANGE = 5000;

export const getMeritList = async (): Promise<any[]> => {
    const templeContract = getContract(templeABI, TEMPLE_CONTRACT);
    let block = await getLatestBlock();

    const batch: Promise<any[]>[] = [];

    while (block > START_BLOCK) {
        batch.push(templeContract.getPastEvents("Worship", {                               
            fromBlock: block-BLOCK_RANGE, 
            toBlock: block
        }))
        block -= BLOCK_RANGE;
    }

    const res = await Promise.all(batch);
    return res.reduce((a,c)=>{
        return a.concat(c).sort((x,y) => y.returnValues.amount-x.returnValues.amount).slice(0,20);
    }).map(ev => { return {
        ...ev.returnValues, 
        block: ev.blockNumber,
        tx: ev.transactionHash
    }})
};

export const getRecentWorships = async (): Promise<any[]> => {
    const templeContract = getContract(templeABI, TEMPLE_CONTRACT);
    let block = await getLatestBlock();

    let worships: any[] = [];

    /* eslint-disable no-await-in-loop */
    while (worships.length < 20 && block > START_BLOCK) {
        const res: any[] = await templeContract.getPastEvents("Worship", {                               
            fromBlock: block-BLOCK_RANGE, 
            toBlock: block    
        });
        worships = worships.concat(res.map(ev => { return {
            ...ev.returnValues, 
            block: ev.blockNumber,
            tx: ev.transactionHash
        }}).reverse());
        block -= BLOCK_RANGE;
    }
    /* eslint-enable no-await-in-loop */

    return worships;
};