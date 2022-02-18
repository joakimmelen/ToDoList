import React, { useState } from 'react'
import ToDo from './ToDo'
import styles from "./ToDoList.module.css"
function ToDoList(props) {
    // const [todos, setTodos] = useState([]);

  return (
    <div className={styles.container}>
       
            { props.todos.map((todoItem) => {
            return <ToDo
                    key={todoItem.id}
                    data={todoItem}
                    removeTodo={props.removeTodo}
                  />
            })}
     
    </div>
  )
}

export default ToDoList