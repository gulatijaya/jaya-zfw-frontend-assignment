import { configureStore } from "@reduxjs/toolkit";
import CharacterSliceReducer from "./CharacterSlice";

export const store = configureStore({
    reducer: {
        characters: CharacterSliceReducer
    }
})