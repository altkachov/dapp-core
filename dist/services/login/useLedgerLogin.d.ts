import { LoginHookGenericStateType, InitiateLoginFunctionType } from '../types';
export interface UseLedgerLoginPropsType {
    callbackRoute: string;
    addressesPerPage?: number;
    token?: string;
    redirectAfterLogin?: boolean;
}
export interface SelectedAddress {
    address: string;
    index: number;
}
export interface LedgerLoginHookCustomStateType {
    accounts: string[];
    showAddressList: boolean;
    startIndex: number;
    selectedAddress: SelectedAddress | null;
    version: string;
    contractDataEnabled: boolean;
    onGoToPrevPage: () => void;
    onGoToNextPage: () => void;
    onSelectAddress: (address: SelectedAddress | null) => void;
    onConfirmSelectedAddress: () => void;
}
export declare type LedgerLoginHookReturnType = [
    InitiateLoginFunctionType,
    LoginHookGenericStateType,
    LedgerLoginHookCustomStateType
];
export declare function useLedgerLogin({ callbackRoute, token, addressesPerPage, redirectAfterLogin }: UseLedgerLoginPropsType): LedgerLoginHookReturnType;
//# sourceMappingURL=useLedgerLogin.d.ts.map