import React, {useContext} from 'react'
import {update} from '../../Services/Firebase';
import {TodoContext} from '../../Context/TodoContext';

 function Todo({todo, header=false}) {

   const {id, detail, status } = todo;
   const {id:idContext, setId, todo:todoContext, setEdit, setTodo} = useContext(TodoContext);

  const handleClickChecked = (id) => {
      if(status){
        update( id, {
          status: false
        });
      }else{
        update( id, {
          status: true
        });
      }
    
  }

  const handleClickDelete = (id) => {
    update( id, {
      delete: true,
      status: false
    });
    setEdit(false);
    setId('');
    setTodo({...todoContext, detail:''});
  }

  const handleClickActive = (id) => {
    update( id, {
      delete: false
    });
}

  const handleClickEdit = (id, detail) => {
    if(id === idContext){
      setEdit(false);
      setId('');
      setTodo({...todoContext, detail:''});
    }else{
      setEdit(true);
      setId(id);
      setTodo({...todoContext, detail:detail});
    }
  }


  return (
    <>
      { header ?
        (
        <div  className="main__row main__row--header" >
          <label onClick={() => handleClickChecked(id)} className="main__row-label" htmlFor={id}>
            <div className={status ? "main__row-checkbox-personalizado-checked" :"main__row-checkbox-personalizado"}></div>
            <p className={status ? "main__row-p-through" : "main__row-p"}>{detail}</p>
          </label>
          <div>
          {todo.delete === false && <svg onClick={() => handleClickEdit(id, detail)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>}
          {todo.delete ?
            (<svg onClick={() => handleClickActive(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>)
            :
             (<svg onClick={() => handleClickDelete(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
            )
          }
          </div>
        </div>
      )
      :
      (
        <div className="main__row" >
          <label onClick={() => handleClickChecked(id)} className="main__row-label" htmlFor={id} >
            <div className={status ? "main__row-checkbox-personalizado-checked" :"main__row-checkbox-personalizado"}></div>
            <p className={status ? "main__row-p-through" : "main__row-p"}>{detail}</p>
          </label>
          <div>
          {todo.delete === false && <svg onClick={() => handleClickEdit(id, detail)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.363 8.464l1.433 1.431-12.67 12.669-7.125 1.436 1.439-7.127 12.665-12.668 1.431 1.431-12.255 12.224-.726 3.584 3.584-.723 12.224-12.257zm-.056-8.464l-2.815 2.817 5.691 5.692 2.817-2.821-5.693-5.688zm-12.318 18.718l11.313-11.316-.705-.707-11.313 11.314.705.709z"/></svg>}
          {todo.delete ?
            (<svg onClick={() => handleClickActive(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>)
            :
             (<svg onClick={() => handleClickDelete(id)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
            )
          }
          </div>
        </div>
      )
      }
   </>
  )
}

export default React.memo(Todo);
