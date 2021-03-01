import React from 'react'
import { db } from '../../Services/FirebaseConfig';

export default function TodoFooter({setTodoActivo, todoActivo, listTodoActivos}) {

  const handleActive = () => {
    setTodoActivo(true);
  }

  const handleCompleted = () => {
    setTodoActivo(false);
  }

  const handleClearCompleted = () => {
    listTodoActivos.forEach(todo => {
      db.collection('todo').doc(todo.id).update({
        status: false
      });
    });
  }

  return (
    <div className="main__row main__row--footer">
    <div className="main__row-items-footer">
      {/* Add dynamic number  */} <span className="main__row-span-footer">items left</span>
    </div>

    <div className="main__row-items-footer main__row-items-footer--center">
      <span onClick={handleActive} className="main__row-span-footer-center">Active</span>
      <span onClick={handleCompleted} className="main__row-span-footer-center">Completed</span>
    </div>

    <div className="main__row-items-footer">
      {todoActivo ? <span onClick={handleClearCompleted} className="main__row-span-footer">Clear Completed</span> : false}
      
    </div>
  </div>
  )
}
