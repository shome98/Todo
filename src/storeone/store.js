import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../features/todoSlice.js";

export const store = configureStore({
    reducer: todoSlice.reducer
})
console.log(todoSlice.reducer)