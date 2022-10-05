import {createSlice} from '@reduxjs/toolkit';
import cartItems from './cartItems';

const initialState ={
    cartItems: cartItems,
    quantity:0,
    total:0,
    isLoading:true,
}

const cartSlice =createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const itemIndex = state.cartItems.findIndex(
                item=>item.id===action.payload.id
                );
                if(itemIndex >=0){
                    state.cartItems[itemIndex].carQuantity +=1
                }else{
                    const tempProduct ={...action.payload, carQuantity:1};
                    state.cartItems.push(tempProduct)
                }
        },
        clearCart : (state)=>{
            state.cartItems=[]
        },
        removeItem: (state,action)=>{
            const itemId =action.payload;
            state.cartItems=state.cartItems.filter((item)=>item.id !== itemId);
        },
        increase: (state,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id === payload.id);
            cartItem.quantity =cartItem.quantity +1
        },
        decrease: (state,{payload})=>{
            const cartItem = state.cartItems.find((item)=>item.id === payload.id);
            cartItem.quantity =cartItem.quantity- 1
        },
        calculateTotals:(state)=>{
            let quantity =0;
            let total =0;
            state.cartItems.forEach((item)=>{
                quantity += item.quantity;
                total += item.quantity*item.price;
            });
            state.quantity = quantity;
            state.total =total;
        }
    }

})

export default cartSlice.reducer;
export const { addToCart,clearCart,increase,decrease,removeItem,calculateTotals,pushOrders } =cartSlice.actions
