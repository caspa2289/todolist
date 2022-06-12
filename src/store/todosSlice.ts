import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITodo, ITodosSliceState } from '../types'
import { getTodosFromLS, setLocalStorage } from '../utils/scripts'
import { TODOLIST_LS_FIELD } from '../utils/constants'

const initialState: ITodosSliceState = {
    data: getTodosFromLS(),
    selectedCards: [],
}

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        addTodo(state, { payload }: PayloadAction<ITodo>) {
            const newState = [...state.data, payload]
            state.data = newState
            setLocalStorage(TODOLIST_LS_FIELD, newState)
        },
        removeTodo(state, { payload }: PayloadAction<number>) {
            const newState = state.data.filter(({ id }) => id !== payload)
            state.data = newState
            setLocalStorage(TODOLIST_LS_FIELD, newState)
        },
        updateTodo(state, { payload }: PayloadAction<ITodo>) {
            const fileteredState = state.data.filter(({ date }) => date !== payload.date)
            const newState = [...fileteredState, payload]
            state.data = newState
            setLocalStorage(TODOLIST_LS_FIELD, newState)
        },
        updateSelectedCards(state, { payload }: PayloadAction<number>) {
            const prevState = state.selectedCards
            state.selectedCards = prevState.indexOf(payload) !== -1
                ? prevState.filter(el => el !== payload)
                : [...prevState, payload]
        }
    },
})

export const {
    addTodo,
    removeTodo,
    updateTodo,
    updateSelectedCards,
} = todosSlice.actions

export default todosSlice.reducer
