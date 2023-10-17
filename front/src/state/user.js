import { createAction, createReducer } from "@reduxjs/toolkit";

export const setUser = createAction("SET_USER");

export const userInitialState = {
  nameAndLastname: null,
  email: null,
  dni: null,
  admin: null,
  operador: null,

};

const reducerUser = createReducer(userInitialState, {
  [setUser]: (state, action) => action.payload,
});

export default reducerUser;


