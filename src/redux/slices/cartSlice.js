import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // addItem(state, action) {
        //     state.items.push(action.payload);
        //     //  state.totalPrice += action.payload.price;
        //     state.totalPrice = state.items.reduce((sum, obj) => {
        //         return obj.price + sum;
        //     }, 0)
        // },
        addItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload.id);
            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }
            state.totalPrice = state.items.reduce((sum, obj) => {
                return obj.price * obj.count + sum;
            }, 0)
        },
        //todo if count == 0
        minusItem(state, action) {
            const findItem = state.items.find(obj => obj.id === action.payload);
            if (findItem) {
                findItem.count--;
                state.totalPrice = state.items.reduce((sum, obj) => {
                    return obj.price * obj.count + sum;
                }, 0)
            }
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload)
        },
        clearItems(state) {
            state.items = [];
            state.totalPrice = 0;
        }
    },
})

// Action creators are generated for each case reducer function
export const {addItem, minusItem, clearItems, removeItem} = cartSlice.actions

export default cartSlice.reducer