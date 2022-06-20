export declare const localStorageKeys: {
    readonly loginExpiresAt: "dapp-core-login-expires-at";
    readonly logoutEvent: "dapp-core-logout-event";
};
declare type LocalValueType = keyof typeof localStorageKeys;
declare type LocalKeyType = typeof localStorageKeys[LocalValueType];
declare type ExpiresType = number | false;
export declare const setItem: ({ key, data, expires }: {
    key: LocalKeyType;
    data: any;
    expires: ExpiresType;
}) => void;
export declare const getItem: (key: LocalKeyType) => any;
export declare const removeItem: (key: LocalKeyType) => void;
export {};
//# sourceMappingURL=local.d.ts.map