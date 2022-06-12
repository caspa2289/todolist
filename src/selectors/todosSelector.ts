import { TodoSLiceRootState } from '../store'
import { createSelector } from '@reduxjs/toolkit'

export const rootTodoListSelector = (state: TodoSLiceRootState) => state.todoList

export const selectTodoListData = createSelector(
    rootTodoListSelector,
    ({ data }) => [...data].sort((a, b) => a.date - b.date)
)

export const selectActiveCardsIds = createSelector(
    rootTodoListSelector,
    ({ selectedCards }) => selectedCards
)
