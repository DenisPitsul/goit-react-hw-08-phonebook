const { createSlice } = require("@reduxjs/toolkit")
const { register, logIn, logOut } = require("./operations")

const handlePending = state => {
    state.isLoading = true
}

const handleRejected = (state, action) => {
    state.isLoading = false
    state.error = action.payload
}

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isLoading: false,
        error: null
    },
    extraReducers: {
        [register.pending]: handlePending,
        [register.fulfilled](state, action) {
            state.isLoading = false
            state.user = action.payload.user
            state.token = action.payload.tiken
            state.isLoggedIn = true
        },
        [register.rejected]: handleRejected,
        [logIn.pending]: handlePending,
        [logIn.fulfilled](state, action) {
            state.isLoading = false
            state.user = action.payload.user
            state.token = action.payload.tiken
            state.isLoggedIn = true
        },
        [logOut.rejected]: handleRejected,
        [logOut.pending]: handlePending,
        [logOut.fulfilled](state, action) {
            state.isLoading = false
            state.user = { name: null, email: null}
            state.token = null
            state.isLoggedIn = false
        },
        [logOut.rejected]: handleRejected,
    }
})

export const authReducer = authSlice.reducer;