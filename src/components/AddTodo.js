import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')

    }
  return (
    <form onSubmit={addTodoHandler} className='row g-3' 
    style={{
        display:"flex", 
        alignItems:"center",
        margin:"0 auto"
        }}>
        <div className="col">
            <input 
                type='text' 
                className="form-control" 
                placeholder='Enter a todo ...' 
                value={input} 
                onChange={e => setInput(e.target.value)}>
            </input>
        </div>
        <div className="col-auto">
            <button type="submit" className="btn btn-warning mb-3">Add Todo</button>
        </div>
    </form>
  )
}

export default AddTodo