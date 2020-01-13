import initialState from "./initialState";
import { createStore } from "..";
import reducers from "../../reducers/pin";


const [storeProvider, useStore] = createStore(reducers, initialState);

export const StoreProvider = storeProvider;
export const useStoreReducer = useStore;