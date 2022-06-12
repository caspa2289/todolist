import { FC } from 'react'
import styles from './TodoList.module.css'
import { useSelector } from 'react-redux'
import {
    selectActiveCardsIds,
    selectTodoListData
} from '../../../../selectors'
import TodoListItem from './components'

export const TodoList: FC = () => {
    const data = useSelector(selectTodoListData)
    const activeCards = useSelector(selectActiveCardsIds)

    console.log(data)
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                {data.map(({ date, text, id}) => (
                    <TodoListItem
                        date={date}
                        text={text}
                        id={id}
                        key={id + text} //Для целей демонстрации пойдёт
                        isActive={activeCards.indexOf(id) !== -1}
                    />
                ))}
            </div>
        </div>
    )
}

export default TodoList
