import { configureStore } from '@reduxjs/toolkit'
import todosSlice from './todosSlice'


export const store = configureStore({
    reducer: {
        todoList: todosSlice,
    },
})

export type TodoSLiceRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
