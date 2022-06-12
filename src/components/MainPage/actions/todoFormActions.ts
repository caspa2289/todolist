import { TodoAction } from '../../../types'
import { addTodo } from '../../../store/todosSlice'

export const addTodoAction = (text: string) :TodoAction => (dispatch, getState) => {
    if (!text) return void 0
    const time = new Date().getTime()
    const newTodo = {
        text,
        date: time,
        id: time, //Для целей демонстрации пойдёт
    }

    dispatch(addTodo(newTodo))
}
