export declare type SessionKeyType = 'address' | 'shard' | 'toasts' | 'toastProgress';
declare type ExpiresType = number | false;
export declare const setItem: ({ key, data, expires }: {
    key: SessionKeyType;
    data: any;
    expires: ExpiresType;
}) => void;
export declare const getItem: (key: SessionKeyType) => any;
export declare const removeItem: (key: SessionKeyType) => void;
export declare const clear: () => void;
export declare const storage: {
    setItem: ({ key, data, expires }: {
        key: SessionKeyType;
        data: any;
        expires: ExpiresType;
    }) => void;
    getItem: (key: SessionKeyType) => any;
    removeItem: (key: SessionKeyType) => void;
    clear: () => void;
};
export default storage;
//# sourceMappingURL=session.d.ts.map