export const AUTH_ACTIONS = {
    LOGIN_REQUEST: "LOGIN_REQUEST",
    LOGIN_SUCCESS: "LOGIN_SUCCESS",
    LOGIN_FAILURE: "LOGIN_FAILURE",
    LOGOUT: "LOGOUT",
    LOAD_USER_FROM_STORAGE: "LOAD_USER_FROM_STORAGE",
  };
  
  export const initialState = {
    user: null,
    token: null,
    isLoading: false,
    error: null,
  };
  
  const authReducer = (state, action) => {
    switch (action.type) {
      case AUTH_ACTIONS.LOGIN_REQUEST:
        return {
          ...state,
          isLoading: true,
          error: null,
        };
  
      case AUTH_ACTIONS.LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          user: action.payload.user,
          token: action.payload.token,
          error: null,
        };
  
      case AUTH_ACTIONS.LOGIN_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload.error,
        };
  
      case AUTH_ACTIONS.LOGOUT:
        return {
          ...initialState,
        };
  
      case AUTH_ACTIONS.LOAD_USER_FROM_STORAGE:
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.token,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;