import { SignableMessage, Transaction } from '@elrondnetwork/erdjs';
import { HWProvider } from '@elrondnetwork/erdjs-hw-provider';
import { WalletProvider } from '@elrondnetwork/erdjs-web-wallet-provider';
import { IDappProvider } from 'types';
import { LoginMethodsEnum } from 'types/enums';
export declare const DAPP_INIT_ROUTE = "/dapp/init";
export declare const getProviderType: <TProvider extends Object>(provider?: TProvider | null | undefined) => LoginMethodsEnum;
export declare const newWalletProvider: (walletAddress: string) => WalletProvider;
export declare const getLedgerConfiguration: (initializedHwWalletP: HWProvider) => Promise<{
    version: string;
    dataEnabled: boolean;
}>;
export declare class EmptyProvider implements IDappProvider {
    init(): Promise<boolean>;
    login<TOptions = {
        callbackUrl?: string;
    } | undefined, TResponse = string>(options?: TOptions): Promise<TResponse>;
    logout<TOptions = {
        callbackUrl?: string;
    }, TResponse = boolean>(options?: TOptions): Promise<TResponse>;
    getAddress(): Promise<string>;
    isInitialized(): boolean;
    isConnected(): Promise<boolean>;
    sendTransaction?<TOptions = {
        callbackUrl?: string;
    }, TResponse = Transaction>(transaction: Transaction, options?: TOptions): Promise<TResponse>;
    signTransaction<TOptions = {
        callbackUrl?: string;
    }, TResponse = Transaction>(transaction: Transaction, options?: TOptions): Promise<TResponse>;
    signTransactions<TOptions = {
        callbackUrl?: string;
    }, TResponse = []>(transactions: [], options?: TOptions): Promise<TResponse>;
    signMessage<T extends SignableMessage, TOptions = {
        callbackUrl?: string;
    }>(message: T, options: TOptions): Promise<T>;
}
export declare const emptyProvider: EmptyProvider;
//# sourceMappingURL=utils.d.ts.map