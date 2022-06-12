import { FC, useRef, useState } from 'react'
import styles from './TodoForm.module.css'
import { useDispatch } from 'react-redux'
import { addTodoAction } from '../../actions'
import { AppDispatch } from '../../../../store'

const TodoForm: FC = () => {
    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLTextAreaElement>(null)

    //лень разбираться что там тс с редаксом не поделил
    const dispatch: AppDispatch = useDispatch()

    const handleAddClick = () => {
        dispatch(addTodoAction(value))
        setValue('')
    }

    const onChange = () => {
        inputRef.current && setValue(inputRef.current.value)
    }

    return (
        <div className={styles.wrapper}>
            <textarea
                ref={inputRef}
                value={value}
                placeholder='Введите текст заметки'
                onChange={onChange}
            />
            <button
                onClick={handleAddClick}
                disabled={!value}
            >
                Добавить
            </button>
        </div>
    )
}

export default TodoForm