import React, { useEffect, useState } from 'react'
import './App.css'
import Todos from './components/Todos'
import { Todo } from './types/Todo.type'
import Input from './components/Input'
import Filter from './components/Filter'
import Header from './components/Header'

const saveTodosToLS = (todos: Todo[]) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function App() {
  const storedTodos = localStorage.getItem('todos')
  const todosInitial = storedTodos
    ? JSON.parse(storedTodos)
    : [
        { id: 1, content: 'Học React', done: true },
        { id: 2, content: 'Học Java', done: false },
        { id: 3, content: 'Học Angular', done: false },
        { id: 4, content: 'Học .Net', done: true }
      ]

  const [todos, setTodos] = useState(todosInitial as Todo[])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState<'all' | 'todo' | 'done'>('all')

  const changeTodoCompleteSate = (id: number) => () => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done: !todo.done }
        }
        return todo
      })
    })
  }

  // console.log(todos)

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const todoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (input !== '') {
      setTodos((prev) => [...prev, { id: prev.length + 1, content: input, done: false }])
    }
    setInput('')
  }

  const filterSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value)
    const value = event.target.value
    switch (value) {
      case 'done':
        setFilter('done')
        break
      case 'todo':
        setFilter('todo')
        break
      default:
        setFilter('all')
    }
  }

  const deleteTodoHandler = (id: number) => () => {
    setTodos((prev) => {
      if (prev.length === 1) {
        return []
      }
      return prev
        .slice(0, id - 1)
        .concat(prev.slice(id))
        .map((todo, index) => {
          return { ...todo, id: index + 1 }
        })
    })
  }

  useEffect(() => {
    saveTodosToLS(todos)
  }, [todos])

  return (
    <div className='App'>
      <div className='todo-container'>
        <Header />
        <Input input={input} inputChange={inputChange} todoSubmit={todoSubmit} />
        <div className='list-container'>
          <Filter filterSelection={filterSelection} />
          <div className='list-content'>
            <Todos
              changeTodoCompleteSate={changeTodoCompleteSate}
              todos={todos}
              filter={filter}
              deleteTodoHandler={deleteTodoHandler}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
