/// <reference types="react" />
import TransactionSender, { TransactionSenderType } from 'components/TransactionSender';
import TransactionsTracker from 'components/TransactionsTracker';
import { TransactionsTrackerType } from 'components/TransactionsTracker/useTransactionsTracker';
export interface CustomComponentsType {
    transactionSender?: {
        component: typeof TransactionSender;
        props?: TransactionSenderType;
    };
    transactionTracker?: {
        component: typeof TransactionsTracker;
        props?: TransactionsTrackerType;
    };
}
export declare function CustomComponents({ customComponents }: {
    customComponents?: CustomComponentsType;
}): JSX.Element;
//# sourceMappingURL=CustomComponents.d.ts.map