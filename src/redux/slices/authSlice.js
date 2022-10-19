/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn:true,
  email:null,
  password:null,
  passwordErrorMessage:'',
  confirmPassword: null,
  confirmPasswordErrorMessage:'',
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.confirmPassword =action.payload.confirmPassword;
      state.isLoggedIn = action.payload.isLoggedIn;
    },

    setSignOut: (state, action) => {
      state.email = null;
      state.password = null;
      state.confirmPassword = null;
      state.isLoggedIn = false;
    },
  },
});

export const {setSignIn, setSignOut} = authSlice.actions;

export const selectIsLoggedIn = state => state.userAuth.isLoggedIn;
export const selectEmail = state => state.userAuth.email;
export const selectPassword = state => state.userAuth.password;
export const selectConfirmPassword = state => state.userAuth.confirmPassword;

export default authSlice.reducer;
