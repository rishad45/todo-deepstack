import React, { useState, useEffect } from 'react'
import Axios from '../API/Axios'
const Todo = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])

    const createTodo = () => {
        Axios.post('/create-todo', todo)
    }
    
    const getTodos = () => {
        Axios.get('/getTodos').then((result) => {
            setTodos(result.data.results)
        })
    }
    useEffect(() => {
        getTodos()
    }, [])
    return (
        <div className='todoPage'>
            <h1>Hello Rishad</h1>
            <div className="create">
                <input type="text" name="todo" onChange={(e) => { setTodo(e.target.value) }} />
                <button onClick={createTodo}>Create new Todo</button>
            </div>
            <div className="allTodos">
                {
                    todos.map((item) => {
                        return <div>
                            <input type="checkbox" name="" id="" /><span>{item}</span>
                            <button>delete</button>
                        </div>
                    })

                }
            </div>
        </div>
    )
}

export default Todo