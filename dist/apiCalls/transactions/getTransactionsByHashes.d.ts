import { SmartContractResult, TransactionServerStatusesEnum } from 'types';
export declare type GetTransactionsByHashesReturnType = {
    hash: string;
    invalidTransaction: boolean;
    status: TransactionServerStatusesEnum;
    results: SmartContractResult[];
    sender: string;
    receiver: string;
    data: string;
    previousStatus: string;
    hasStatusChanged: boolean;
}[];
export declare type PendingTransactionsType = {
    hash: string;
    previousStatus: string;
}[];
export declare function getTransactionsByHashes(pendingTransactions: PendingTransactionsType): Promise<GetTransactionsByHashesReturnType>;
//# sourceMappingURL=getTransactionsByHashes.d.ts.map