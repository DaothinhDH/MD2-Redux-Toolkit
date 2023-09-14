import {createSlice} from '@reduxjs/toolkit'
const countSlice = createSlice({
    name: 'count',
    initialState: { value: 0 },
    reducers: {
        increase: (state, action) => {
            state.value += 1;
        },
        decrease: (state, action) => { 
            state.value -= 1;
        }
    }
});
 
export const { increase } = countSlice.actions; //export action ra ben ngoai
export const { decrease } = countSlice.actions;
export default countSlice.reducer;

    