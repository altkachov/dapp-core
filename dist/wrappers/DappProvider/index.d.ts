import React from 'react';
import { GetTransactionsByHashesType, SendSignedTransactionsAsyncType } from 'contexts/types';
import { IDappProvider } from 'types';
import { CustomNetworkType, EnvironmentsEnum } from 'types';
import { CustomComponentsType } from './CustomComponents';
export interface DappProviderPropsType {
    children: React.ReactChildren | React.ReactElement;
    customNetworkConfig?: CustomNetworkType;
    externalProvider?: IDappProvider;
    environment: 'testnet' | 'mainnet' | 'devnet' | EnvironmentsEnum;
    sendSignedTransactionsAsync?: SendSignedTransactionsAsyncType;
    getTransactionsByHash?: GetTransactionsByHashesType;
    customComponents?: CustomComponentsType;
}
export declare const DappProvider: ({ children, customNetworkConfig, externalProvider, environment, customComponents }: DappProviderPropsType) => JSX.Element;
export default DappProvider;
//# sourceMappingURL=index.d.ts.map