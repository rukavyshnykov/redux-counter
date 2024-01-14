import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const slice = createSlice({
    name: "count",
    initialState,
    reducers: (create) => {
        return {
            // changeValue: create.reducer(state, action) => {
            //     state = action.payload.value
            // }
        }
    }
})

export const settingsReducer = slice.reducer
export const settingsActions = slice.actions