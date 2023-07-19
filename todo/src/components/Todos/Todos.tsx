import TodoComponent from '../Todo/Todo'
import { Todo } from '../../types/Todo.type'
import { useEffect, useState } from 'react'

interface Props {
  todos: Todo[]
  changeTodoCompleteSate: (id: number) => () => void
  filter: 'all' | 'done' | 'todo'
  deleteTodoHandler: (id: number) => () => void
}

function Todos(props: Props) {
  const { todos, changeTodoCompleteSate, filter, deleteTodoHandler } = props
  const [filterTodos, setFilterTodos] = useState(todos)
  useEffect(() => {
    setFilterTodos(
      todos.filter((todo) => {
        if (filter === 'todo' && !todo.done) return true
        if (filter === 'done' && todo.done) return true
        if (filter === 'all') return true
      })
    )
  }, [filter, todos])

  return (
    <div>
      {filterTodos.map((todo, index) => {
        return (
          <TodoComponent
            changeTodoCompleteSate={changeTodoCompleteSate}
            todo={todo}
            index={index}
            deleteTodoHandler={deleteTodoHandler}
            key={todo.id}
          />
        )
      })}
    </div>
  )
}

export default Todos
