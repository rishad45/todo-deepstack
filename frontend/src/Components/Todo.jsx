import React, { useState, useEffect } from 'react'
import Axios from '../API/Axios'
const Todo = () => {
    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [finshed, setFinished] = useState([])
    const [update, setUpdate] = useState(false)

    const createTodo = () => {
        Axios.post('/create-todo', { todo }).then((res) => {
            setUpdate(true)
        })
    }

    const getTodos = () => {
        Axios.get('/getTodo').then((result) => {
            setTodos(result.data.results)
        })
    }

    const getFinishedTodos = () => {
        Axios.get('/getFinishedTodo').then((result) => {
            setFinished(result.data.results)
        })
    }

    const deleteTodo = (id) => {
        console.log(id)
        Axios.post('/delete-todo', { id })
            .then((res) => {
                setUpdate(true)
            })
    }

    const updateTodo = (id) => {
        console.log(id)
        Axios.post('/update-todo', { id })
            .then((res) => {
                setUpdate(true)
            })
    }

    useEffect(() => {
        getTodos()
        getFinishedTodos()
        setUpdate(false)
    }, [update])
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
                            return <div key={item._id}>
                                <input type="checkbox" name="" id="" onClick={() => updateTodo(item._id)} /><span>{item.todo}</span>
                                <button onClick={() => deleteTodo(item._id)}>delete</button>
                            </div>
                    })
                }
            </div>

            <div className="finished">
                <h2>Finished Tasks</h2>
                {
                    finshed.map((item) => {
                        return <div>
                            <p>{item.todo}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Todo