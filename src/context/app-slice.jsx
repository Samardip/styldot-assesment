import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "styldot-app",
    initialState: {
        userPostDetails:[],
        paginatedPostDetails:[],
    },
    reducers: {
        updateUserPostDetails(state, action) {
            state.userPostDetails =action.payload;
        },
        updatePaginatedPostDetails(state, action) {
            state.paginatedPostDetails =action.payload;
        },
    },
});

const appActions = appSlice.actions;

export { appActions };
export default appSlice;
