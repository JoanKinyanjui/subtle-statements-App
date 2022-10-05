import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './features/cartSlice';
import likedSlice from './features/likedSlice';

export  const store =configureStore({
    reducer:{
        cart:cartSlice,
        likes:likedSlice,
    },


})




