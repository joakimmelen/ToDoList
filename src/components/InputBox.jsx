import React, { useState } from 'react'
import styles from "./inputbox.module.css"

function InputBox(props) {
    const [input, setInput] = useState("");
    // const input = 
    // const [todos, setTodos] = useState([]);

    // function handleClick() {
    //     if (input !== "")
    //     setTodos((prevTodos) => {
    //       return [...prevTodos, input]
    //     })
    //     setInput("");
    //   }
    
      function handleChange(event) {
        const value = event.target.value;
        setInput(value);
      }

      function handleKeyDown(e) {
        if (e.key === 'Enter') {
          props.add(input);
          setInput("");
        }
      }

      function handleClick() {
        props.add(input);
        setInput("");
      }

  return (
    <div>
        <div className={styles.container}>
            <input
            className={styles.input}
            type="text"
            onChange={handleChange}
            value={input}
            placeholder="Enter a task.."
            onKeyDown={handleKeyDown}
            />
            {/* // onClick={handleClick} */}
            <button 
            className={styles.addBtn}
            onClick={handleClick} 
            // onClick={() => props.add(input) || setInput("")} 
            >Add</button>
            {/* <button onClick={() => props.addData(input)} >Add Todo</button> */}
            {/* <button onClick={handleClick} >Add Todo</button> */}
        </div>
        {/* <button disabled className={styles.saveBtn} onClick={props.save} >Save all</button> */}
        <button className={styles.removeBtn} onClick={props.reset} >Clear all</button>
    </div>
  )
}

export default InputBox;