import { ExtensionProvider } from '@elrondnetwork/erdjs-extension-provider';
import { HWProvider } from '@elrondnetwork/erdjs-hw-provider';
import { WalletConnectProvider } from '@elrondnetwork/erdjs-wallet-connect-provider';
import { WalletProvider } from '@elrondnetwork/erdjs-web-wallet-provider';
import { IDappProvider } from 'types';
declare type ProvidersType = IDappProvider | ExtensionProvider | WalletProvider | HWProvider | WalletConnectProvider;
export declare function setAccountProvider<TProvider extends ProvidersType>(provider: TProvider): void;
export declare function setExternalProvider(provider: IDappProvider): void;
export declare function setExternalProviderAsAccountProvider(): void;
export declare function getAccountProvider(): IDappProvider;
export declare function getExternalProvider(): IDappProvider | null;
export {};
//# sourceMappingURL=accountProvider.d.ts.map