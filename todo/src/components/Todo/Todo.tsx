import { useState } from 'react'
import { Todo } from '../../types/Todo.type'
import styles from './Todo.module.css'

interface TodoComponentProps {
  changeTodoCompleteSate: (id: number) => () => void
  todo: Todo
  index: number
  deleteTodoHandler: (id: number) => () => void
}

function TodoComponent(props: TodoComponentProps) {
  const [deleteVisible, setDeleteVisible] = useState(false)
  const { changeTodoCompleteSate, todo, index, deleteTodoHandler } = props

  const deleteMouseOver = () => {
    if (!deleteVisible) {
      setDeleteVisible(true)
    }
  }

  const deleteMouseLeave = () => {
    setDeleteVisible((prev) => !prev)
  }

  // console.log(deleteVisible)

  return (
    <div className={styles.todo} onMouseOver={deleteMouseOver} onMouseLeave={deleteMouseLeave}>
      <div
        onClick={changeTodoCompleteSate(todo.id)}
        key={todo.id}
        style={
          todo.done ? { textDecoration: 'line-through', color: '#9CA3AF', cursor: 'pointer' } : { cursor: 'pointer' }
        }
      >
        {index + 1}. {todo.content}
      </div>

      <div onClick={deleteTodoHandler(todo.id)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='rgb(180, 83, 9)'
          fill='none'
          style={{ opacity: deleteVisible ? 1 : 0 }}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
          />
        </svg>
      </div>
    </div>
  )
}

export default TodoComponent
