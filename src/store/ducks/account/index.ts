import { createAction, createReducer } from '@reduxjs/toolkit';


interface IAccount {
    isAuthenticated : boolean
}

const INITIAL_STATE : IAccount = {
	isAuthenticated: false
};

export const signin = createAction('SIGNIN');
export const signout = createAction('SIGNOUT');

export default createReducer(INITIAL_STATE, {
	[signin.type]: (state, action) => ({ ...state, isAuthenticated: true }),
	[signout.type]: (state, action) => ({ ...state, isAuthenticated: false })
});
