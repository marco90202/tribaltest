import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
    name : "business",
    initialState : {
        business : "Pizza bros"
    },
    reducers : {
        update : (state,action) => {
                state.businessname = action.payload.businessname
        },
    },
})
export const { update } = UserSlice.actions
export default UserSlice.reducer
