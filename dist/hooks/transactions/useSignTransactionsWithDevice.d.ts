import { Transaction } from '@elrondnetwork/erdjs';
import { ActiveLedgerTransactionType, MultiSignTxType } from 'types';
export interface UseSignTransactionsWithDevicePropsType {
    onCancel: () => void;
    verifyReceiverScam?: boolean;
}
declare type DeviceSignedTransactions = Record<number, Transaction>;
export interface UseSignTransactionsWithDeviceReturnType {
    allTransactions: MultiSignTxType[];
    onSignTransaction: () => void;
    onNext: () => void;
    onPrev: () => void;
    onAbort: () => void;
    waitingForDevice: boolean;
    isLastTransaction: boolean;
    callbackRoute?: string;
    currentStep: number;
    signedTransactions?: DeviceSignedTransactions;
    currentTransaction: ActiveLedgerTransactionType | null;
}
export declare function useSignTransactionsWithDevice({ onCancel, verifyReceiverScam }: UseSignTransactionsWithDevicePropsType): UseSignTransactionsWithDeviceReturnType;
export default useSignTransactionsWithDevice;
//# sourceMappingURL=useSignTransactionsWithDevice.d.ts.map