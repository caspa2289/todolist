import { FC } from 'react'
import styles from './MainPage.module.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const MainPage: FC = () => {
    return (
        <main className={styles.wrapper}>
            <TodoForm />
            <TodoList />
        </main>
    )
}

export default MainPage
