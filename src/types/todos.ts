import { TodoSLiceRootState } from '../store'
import { AnyAction, ThunkAction } from '@reduxjs/toolkit'

export interface ITodo {
    date: number
    text: string
    id: number
}

export interface ITodosSliceState {
    data: ITodo[]
    selectedCards: number[]
}

export type TodoAction = ThunkAction<
        void,
        TodoSLiceRootState,
        unknown,
        AnyAction
    >

