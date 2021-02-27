import React, { useState } from 'react'
import { db } from '../../Services/Firebase'

function FormAddTodo() {

  const [todo, setTodo] = useState("");

  const handleSumit = (e) => {
    e.preventDefault();
    // Add a new document in collection "cities"
    db.collection("todo").add({
      delete: false,
      detail: todo,
      status: true
    }).then((e) => {
        console.log("Document successfully written!");
        console.log(e, 'insertado')
        
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      });
      setTodo('');
  }

  const handlechange = (e) => {
    setTodo(e.target.value);
  }

  return (
    <>
      <h1 className="header__h1">LISTA</h1>
      <form className='header__form' onSubmit={handleSumit}>
        <input className="header__input" type="text" placeholder="Escriba aqui..." onChange={handlechange} value={todo} />
      </form>
    </>
  )
}

export default FormAddTodo
