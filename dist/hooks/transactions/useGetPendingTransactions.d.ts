import { SignedTransactionsType, SignedTransactionsBodyType } from 'types/transactions';
interface UseGetPendingTransactionsReturnType {
    pendingTransactions: SignedTransactionsType;
    pendingTransactionsArray: [string, SignedTransactionsBodyType][];
    hasPendingTransactions: boolean;
}
export declare function useGetPendingTransactions(): UseGetPendingTransactionsReturnType;
export {};
//# sourceMappingURL=useGetPendingTransactions.d.ts.map