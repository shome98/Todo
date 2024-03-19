import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/todoSlice.js";

export const store = configureStore({
    reducer: todoReducer
})
console.log(todoSlice.reducer)