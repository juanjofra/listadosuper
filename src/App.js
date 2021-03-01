import React, {useState} from 'react';
import './App.css';
import FormAddTodo from './Components/FormAddTodo';
import ListTodo from './Components/ListTodo';
import { TodoContext } from './Context/TodoContext';

const initialState = {
  delete: false,
  detail: "",
  status: false
}

function App() {

  const [todo, setTodo] = useState(initialState);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState('');

  return (
    <TodoContext.Provider value={{
      todo,
      edit,
      id,
      setTodo,
      setEdit,
      setId
    }}>
      <section className="container">

        <div className="header">
          <FormAddTodo />
        </div>

        <section className="main">
          <ListTodo />
        </section>
        <footer className="footer">Listado del super JyJ</footer>
      </section>

    </TodoContext.Provider>


  );
}

export default App;
