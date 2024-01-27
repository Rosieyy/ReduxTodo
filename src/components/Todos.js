import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
        <div>Todos</div>
        {todos.map(todo => (
            <div className='row g-3' key={todo.id}>
                <div className='col'>
                    {todo.text}
                </div>
                <div className='col-auto'>
                    <button 
                        onClick={() => dispatch(removeTodo(todo.id))} 
                        style={{marginLeft:"10px"}}
                        className="btn btn-warning mb-3"
                    >
                        <i className="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div> 
        ))}   
    </>
  )
}

export default Todos