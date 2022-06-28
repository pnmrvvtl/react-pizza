import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    sortId: 0
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action) {
            state.categoryId = action.payload;
        },
        setSortId(state, action) {
            state.sortId = action.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCategoryId, setSortId } = filterSlice.actions

export default filterSlice.reducer