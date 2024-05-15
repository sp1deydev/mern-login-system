import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        currentUser: {
            "firstname": "test",
            "lastname": "test",
            "email": "thienkhanhrayless@gmail.com",
            "username": "test",
            "password": "test",
        },
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        removeCurrentUser: (state, action) => {
            state.currentUser = null
        },
        editUser: (state, action) => {
            state.currentUser = action.payload
        },
    },
})