import {createSlice} from '@reduxjs/toolkit';
import products from './products'

const initialState={
    products:products,
    likedItems: [],
    likedQuantity:0,
};

const likedSlice=createSlice({
    name:'likes',
    initialState,
    reducers:{
        clear:(state)=>{
            state.likedItems=[];
            state.likedQuantity =0;
        },
        like:(state,action)=>{

            const productIndex = state.products.findIndex(item=>item.id === action.payload.id)
              if (productIndex >= 0){
                state.likedQuantity +=1;
                const tempProduct ={...action.payload};
                state.likedItems.push(tempProduct)
              }

                          
        },
        unlike:(state,action)=>{

            const likedIndex = state.likedItems.findIndex(item =>item.id === action.payload.id)
              if (likedIndex >= 0){
                state.likedQuantity -=1;
                state.likedItems.splice(likedIndex,1)
              }
        }
    }
})

export default likedSlice.reducer;
export const{clear,like,unlike}=likedSlice.actions