import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const slice = createSlice({
    name: "count",
    initialState,
    reducers: (create) => {
        return {
            changeValue: create.reducer((state, action: PayloadAction<number>) => {
                state.count = action.payload
            }),
            increaseValue: create.reducer((state, _) => {
                state.count += 1
            }),
            decreaseValue: create.reducer((state, _) => {
                state.count -= 1
            }),

        }
    }
})

export const countReducer = slice.reducer
export const countActions = slice.actions

type initialStateType = typeof initialState