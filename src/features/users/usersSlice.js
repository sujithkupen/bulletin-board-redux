import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "0",
        name: "Annalisa"
    },
    {
        id: "1",
        name: "Biba"
    },
    {
        id: "2",
        name: "Cardi"
    }]

const userSlice = createSlice({
    name : "users",
    initialState,
    reducers : {

    }
})

export const selectAllUsers = (state) => state.users
export default userSlice.reducer