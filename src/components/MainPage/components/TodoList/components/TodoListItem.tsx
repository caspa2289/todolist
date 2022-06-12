import { FC, useRef, useState } from 'react'
import { ITodo } from '../../../../../types'
import styles from './TodoListItem.module.css'
import { batch, useDispatch } from 'react-redux'
import {
    removeTodo,
    updateSelectedCards
} from '../../../../../store/todosSlice'
import { updateTodoAction } from '../../../actions'
import { AppDispatch } from '../../../../../store'

interface ITodoItemProps extends ITodo {
    isActive: boolean
}

const TodoListItem: FC<ITodoItemProps> = ({ date, text, isActive , id}) => {
    const dispatch: AppDispatch = useDispatch()
    const [value, setValue] = useState<string>('')
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const onChange = () => {
        textAreaRef.current && setValue(textAreaRef.current.value)
    }

    const handleDeleteClick = () => {
        dispatch(removeTodo(id))
    }

    const handleShowEdit = () => {
        setValue(text)
        dispatch(updateSelectedCards(id))
    }

    const handleAcceptEditClick = () => {
        batch(() => {
            handleShowEdit()
            setValue(text)
            dispatch(updateTodoAction(value, date))
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.date}>{date}</div>
            <div className={styles.controls}>
                {!isActive ? (
                    <>
                        <button onClick={handleDeleteClick}>Удалить</button>
                        <button onClick={handleShowEdit}>Редактировать</button>
                    </>
                ) : (
                    <>
                        <button
                            onClick={handleAcceptEditClick}
                            disabled={!value}
                        >
                            Ок
                        </button>
                        <button onClick={handleShowEdit}>Отмена</button>
                    </>
                )}

            </div>
            {!isActive ? (
                <div className={styles.text}>{text}</div>
            ) : (
                <div className={styles.edit}>
                    <textarea
                        ref={textAreaRef}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            )}
        </div>
    )
}

export default TodoListItem
