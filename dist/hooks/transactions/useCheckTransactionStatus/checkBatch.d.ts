import { GetTransactionsByHashesType } from 'contexts/types';
import { SignedTransactionsBodyType } from 'types/transactions';
interface TransactionStatusTrackerPropsType {
    sessionId: string;
    transactionBatch: SignedTransactionsBodyType;
    getTransactionsByHash?: GetTransactionsByHashesType;
    shouldRefreshBalance?: boolean;
}
export declare function checkBatch({ sessionId, transactionBatch: { transactions, customTransactionInformation }, getTransactionsByHash, shouldRefreshBalance }: TransactionStatusTrackerPropsType): Promise<void>;
export default checkBatch;
//# sourceMappingURL=checkBatch.d.ts.map