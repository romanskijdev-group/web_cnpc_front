import { VerInterface } from './interface'
import { createSlice } from '@reduxjs/toolkit';

const initialState: VerInterface = {
    versions: [
        '1.7.10',
        '1.12.2',
    ],
    loading: false,
    error: null
};

const versionsSlice = createSlice({
    name: 'versions',
    initialState,
    reducers: {
        addVersion: (state, action) => {
            state.versions.push(action.payload);
        },
    }
    /*,
    extraReducers: (builder) => {
        builder
            .addCase(authAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(authAsync.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loading = false;
            });
    }
    */

});

export default versionsSlice.reducer;
