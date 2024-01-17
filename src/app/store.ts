import { configureStore } from "@reduxjs/toolkit";
import { countReducer } from "../features/Counter/countSlice";
import { settingsReducer } from "../features/Counter/settingsSlice";
import { appReducer } from "./appSlice";

export const store = configureStore({
    reducer: {
        settings: settingsReducer,
        count: countReducer,
        app: appReducer
    }
})

export type AppRootStateType = ReturnType<typeof store.getState>