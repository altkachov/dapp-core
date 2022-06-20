import { Transaction } from '@elrondnetwork/erdjs/out';
import { GetTransactionsByHashesReturnType, PendingTransactionsType, SendSignedTransactionsReturnType } from 'apiCalls/transactions';
export declare type SendSignedTransactionsAsyncType = (signedTransactions: Transaction[]) => Promise<SendSignedTransactionsReturnType>;
export declare type GetTransactionsByHashesType = (pendingTransactions: PendingTransactionsType) => Promise<GetTransactionsByHashesReturnType>;
export interface OverrideDefaultBehaviourContextValueType {
    sendSignedTransactionsAsync: SendSignedTransactionsAsyncType;
    getTransactionsByHash: GetTransactionsByHashesType;
}
//# sourceMappingURL=types.d.ts.map