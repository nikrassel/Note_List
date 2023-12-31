import React, { useState, useEffect } from 'react'
import { TodoForm } from '../components/TodoForm'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'

declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>(JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev])
  }

  const toggleHandler = (id: number) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(newTodos)
  }

  const removeHandler = (id: number) => {
    const shouldRemove = confirm ('Вы действительно хотите удалить эту запись?')
    if(shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }
    return (
        <React.Fragment>
            <TodoForm onAdd={addHandler}/>
            <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler}/>
        </React.Fragment>
    )
}
