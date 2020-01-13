
export const createReducer = (handlers:any) => (state:any, action:any) => {
  if (!handlers.hasOwnProperty(action.type)) {
    return state;
  }

  return handlers[action.type](state, action);
};


