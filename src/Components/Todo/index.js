import React from 'react'
import {db} from '../../Services/Firebase';

 function Todo({todo, header=false}) {
   const {id, detail, status } = todo;

  const handleClick = (id) => {
      if(status){
       
        db.collection('todo').doc(id).update({
          status: false
        });
      }else{
       
        db.collection('todo').doc(id).update({
          status: true
        });
      }
    
  }

  const handleClickDelete = (id) => {
    
    db.collection('todo').doc(id).update({
      delete: true
    });
  }

  const handleClickActive = (id) => {
    
    db.collection('todo').doc(id).update({
      delete: false
    });
}


  return (
    <>
      { header ?
        (
        <div  className="main__row main__row--header" >
         
          <label onClick={() => handleClick(todo.id)} className="main__row-label" htmlFor={todo.id}>
            <div className={status ? "main__row-checkbox-personalizado-checked" :"main__row-checkbox-personalizado"}></div>
            <p>{todo.detail}</p>
          </label>
          <div>
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
          
          <label onClick={() => handleClick(id)} className="main__row-label" htmlFor={id} >
            <div className={status ? "main__row-checkbox-personalizado-checked" :"main__row-checkbox-personalizado"}></div>
            <p>{detail}</p>
          </label>
          <div>
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
