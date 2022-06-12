import { TODOLIST_LS_FIELD } from './constants'

export const getLocalStorage = (key: string) => {
    try {
        const serializedState = localStorage.getItem(key)

        return serializedState ? JSON.parse(serializedState) : undefined
    } catch (err) {
        return undefined
    }
}

export const setLocalStorage = (key: string, value: any) => {
    try {
        const serializedState = JSON.stringify(value)
        localStorage.setItem(key, serializedState)
    } catch (err) {
        console.error(err)
    }
}

export const getTodosFromLS = () => {
    const todos = getLocalStorage(TODOLIST_LS_FIELD)
    if (!todos) {
        setLocalStorage(TODOLIST_LS_FIELD, [])
        return []
    }

    return todos
}