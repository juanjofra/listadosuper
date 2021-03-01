import React, { useContext, useRef, useEffect } from 'react';
import { TodoContext } from '../../Context/TodoContext';
import {addTodo, update} from '../../Services/Firebase';


function FormAddTodo() {

  const {todo, id, edit, setTodo, setEdit, setId} = useContext(TodoContext);
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, [ id])

  const handleSumit = (e) => {
    e.preventDefault();
    // Add a new document in collection "cities"
    if(edit){
      update(id,{detail:todo.detail});
      setTodo({...todo, detail:''});
      setEdit(false);
      setId('')
    }else{
      addTodo(todo);
        setTodo({...todo, detail:''});
    }
  }

  const handlechange = (e) => {
    setTodo({...todo, detail: e.target.value});
  }

  return (
    <>
      <h1 className="header__h1">LISTA</h1>
      <form className='header__form' onSubmit={handleSumit}>
        <input className="header__input" type="text" placeholder="Escriba aqui..." onChange={handlechange} value={todo.detail} ref={input}/>
      </form>
    </>
  )
}

export default FormAddTodo
