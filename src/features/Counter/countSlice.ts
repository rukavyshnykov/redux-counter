import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

const slice = createSlice({
    name: "count",
    initialState,
    reducers: (create) => {
        return {
            changeValue: create.reducer((state, action: PayloadAction<initialStateType>) => {
                state.count = action.payload.count
            }),
            increaseValue: create.reducer((state, action: PayloadAction<undefined>) => {
                state.count += 1
            }),
            decreaseValue: create.reducer((state, action: PayloadAction<undefined>) => {
                state.count -= 1
            }),

        }
    }
})

export const countReducer = slice.reducer
export const countActions = slice.actions

type initialStateType = typeof initialState