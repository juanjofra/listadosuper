import React from 'react'

export default function TodoFooter({setTodoActivo}) {

  const handleActive = () => {
    setTodoActivo(true);
  }

  const handleCompleted = () => {
    setTodoActivo(false);
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
      <span className="main__row-span-footer">Clear Completed</span>
    </div>
  </div>
  )
}
