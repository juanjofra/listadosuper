import React, { useState, useEffect } from 'react'
import {getListTodoWithWhere} from '../../Services/Firebase';
import Todo from '../Todo/index';
import TodoFooter from '../TodoFooter/index';

export default function ListTodo() {

  const [listTodoActivos, setListTodoActivos] = useState([]);
  const [listTodoDesactivados, setListTodoDesactivados] = useState([]);
  const [loading, setLoadinga] = useState(false);
  const [todoActivo, setTodoActivo] = useState(true);


  useEffect(() => {
    setLoadinga(true);
    let unsubscribe;
    if(todoActivo){
      unsubscribe = getListTodoWithWhere(false, (setListTodoActivos));
      setLoadinga(false);
    }else{
      unsubscribe = getListTodoWithWhere(true, (setListTodoDesactivados));
      setLoadinga(false);
    }
    return () => unsubscribe && unsubscribe();
  }, [todoActivo]);

  return (
    <>
      {/* Se muestra el mensaje cargando mientras los datos se terminan de cargar */}
      { !!loading && (<h1>CARGANDO...</h1>)}

      {/* Se muestra el mensaje si la lista no tiene articulos */}
      { listTodoActivos.length <= 0 && loading === false && (<h1>LISTADO VACIO...!</h1>)}

      {todoActivo ?
          //Se muestra el listado
        (listTodoActivos.length) <= 1 ? 
          listTodoActivos.map( todo => ( <Todo todo={todo} header={true} key={todo.id}/>))
          : 
          listTodoActivos.map( (todo, index) => ((index === 0) ? (<Todo todo={todo} header={true} key={todo.id}/>) : (<Todo todo={todo} header={false} key={todo.id}/>)))
        
        :
        //Se muestra el listado
        (listTodoDesactivados.length <= 1) ? 
          listTodoDesactivados.map( todo => ( <Todo todo={todo} header={true} key={todo.id}/>))
          : 
          listTodoDesactivados.map( (todo, index) => ((index === 0) ? (<Todo todo={todo} header={true} key={todo.id}/>) : (<Todo todo={todo} header={false} key={todo.id}/>)))
      }

      {listTodoActivos.length >= 0 && <TodoFooter todoActivo={todoActivo} setTodoActivo={setTodoActivo} listTodoActivos={listTodoActivos}/>}
    </>
  )
}
