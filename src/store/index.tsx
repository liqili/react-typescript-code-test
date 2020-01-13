import React, { useContext, useReducer } from 'react';

// export const StoreContext = createContext({});

// export const StoreProvider = ({ reducer, initialState, children }) => (
//   <StoreContext.Provider
//     value={useReducer(reducer, initialState)}
//     children={children}
//   />
// );

// export const useStore = () => useContext(StoreContext);


export function createStore<StateType, ActionType>(
  reducer: React.Reducer<StateType, ActionType>,
  initialState: StateType,
) {
  const defaultDispatch: React.Dispatch<ActionType> = () => initialState
  const storeContex = React.createContext({
    state: initialState,
    dispatch: defaultDispatch,
  })
  const storeProvider:React.FC<React.PropsWithChildren<{}>> = (props) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [state, dispatch] = useReducer<React.Reducer<StateType, ActionType>>(reducer, initialState);
    return <storeContex.Provider value={{ state, dispatch }} {...props} />
  }

  const useStore = () => useContext(storeContex);
  return [storeProvider, useStore] as const
}