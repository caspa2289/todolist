import { TodoAction } from '../../../types'
import { updateTodo } from '../../../store/todosSlice'

export const updateTodoAction = (text: string, date: number) :TodoAction => (dispatch, getState) => {
    if (!text) return void 0
    const newTodo = {
        text,
        date,
        id: date, //Для целей демонстрации пойдёт
    }

    dispatch(updateTodo(newTodo))
}
