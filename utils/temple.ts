import { PromisifyBatchRequest } from "../lib/PromiseBatchRequest";
import { TEMPLE_CONTRACT } from "./constants";
import { getContract, getLatestBlock} from "./web3";
import templeABI from "./abis/temple.json";

const START_BLOCK = 9188546;
const BLOCK_RANGE = 5000;

export interface Worship {
    block: number;
    tx: string;
    user: string
    amount: number;
    prayer?: string;
}

export const getMeritList = async (): Promise<Array<Worship>> => {
    const templeContract = getContract(templeABI, TEMPLE_CONTRACT);
    let block = await getLatestBlock();

    const batch = new PromisifyBatchRequest<any>();

    while (block > START_BLOCK) {
        batch.add(templeContract.getPastEvents("Worship", {                               
            fromBlock: block-BLOCK_RANGE, 
            toBlock: block
        }))
        block -= BLOCK_RANGE;
    }

    const res = await (batch.execute() as Promise<Array<any>>);
    return res.sort((a,b) => b.returnValues.amount-a.returnValues.amount).slice(0,20).map(ev => { return {
        ...ev.returnValues, 
        block: ev.blockNumber,
        tx: ev.transactionHash
    } as Worship})
};