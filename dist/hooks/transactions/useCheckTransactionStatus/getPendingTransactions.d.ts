import { SignedTransactionType } from 'types';
interface PendingTxType {
    hash: string;
    previousStatus: string;
}
export declare function getPendingTransactions(transactions: SignedTransactionType[], timedOutHashes: string[]): PendingTxType[];
export default getPendingTransactions;
//# sourceMappingURL=getPendingTransactions.d.ts.map