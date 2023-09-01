import TodoComponent from '../Todo/Todo'
import { Todo } from '../../types/Todo.type'
import { useEffect, useState } from 'react'

interface TodosProps {
  todos: Todo[]
  changeTodoCompleteState: (id: number) => () => void
  filter: 'all' | 'done' | 'todo'
  deleteTodoHandler: (id: number) => () => void
  editTodo: (todo: Todo) => () => void
}

function Todos(props: TodosProps) {
  const { todos, changeTodoCompleteState, filter, deleteTodoHandler, editTodo } = props
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
            changeTodoCompleteState={changeTodoCompleteState}
            todo={todo}
            index={index}
            deleteTodoHandler={deleteTodoHandler}
            editTodo={editTodo}
            key={todo.id} // Để react không báo lỗi thiếu key
          />
        )
      })}
    </div>
  )
}

export default Todos
