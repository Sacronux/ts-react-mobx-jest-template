import React, { useContext, createContext, FC } from 'react'
import { useLocalStore } from 'mobx-react'
import { InitStore } from './index'

const storeContext = createContext<InitStore | null>(null)

export const StoreProvider: FC = ({ children }) => {
    const store = useLocalStore(() => new InitStore());
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
    const store = useContext(storeContext);
    if (!store) {
        throw new Error(
            'Store not found! Consider wrapping component in <Provider/>',
        );
    }
    return store;
};
