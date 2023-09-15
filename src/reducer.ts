export interface State {
  user: any;
}

export const initialState: State = {
  user: null,
};

export const actionTypes = {
  SET_USER: "SET_USER" as const,
};

type Action = {
  type: typeof actionTypes.SET_USER;
  user: any;
};

const reducer = (state: State, action: Action): State => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
