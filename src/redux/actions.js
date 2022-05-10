import {
    SET_EMAIL,
    SET_PASSWORD,
  CREATE_USER_ID
  } from "./actionsTypes";
  
  export const handleCreateQuizChange = (payload) => ({
    type: SET_PASSWORD,
    payload,
  });
 
  export const handleInsertText = (payload) => ({
    type: SET_EMAIL,
    payload,
  });
  
  export const handleCreateUser = (payload) => ({
    type: CREATE_USER_ID,
    payload,
  });
  