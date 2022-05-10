import {
    CREATE_USER_ID,
    SET_EMAIL,
    SET_PASSWORD
  } from "./actionsTypes";
  
  const initialState = {
    user_id: 0,
    email: "",
    password: ""
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_USER_ID:
        return {
          ...state,
          user_id: action.payload
        };
      case SET_EMAIL:
        return {
          ...state,
          email: action.payload,
        };
      case SET_PASSWORD:
        return {
            ...state,
            password: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  