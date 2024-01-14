import { Action, ThunkDispatch, combineReducers, configureStore } from "@reduxjs/toolkit";
import { countReducer } from "../features/Counter/countSlice";
import { settingsReducer } from "../features/Counter/settingsSlice";

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        count: countReducer
    }
})

export type AppRootStateType = ReturnType<typeof store.getState>