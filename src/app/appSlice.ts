import { PayloadAction, createSlice } from "@reduxjs/toolkit"

const initialState = {
    mode: 'counter' as ModeType
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: (create) => {
        return {
            setMode: create.reducer((state, action: PayloadAction<ModeType>) => {
                state.mode = action.payload
            })
        }
        
    }
})

export const appReducer = slice.reducer
export const appActions = slice.actions

type ModeType = 'counter' | 'settings'