import React, { useState } from 'react'
import styles from "./ToDo.module.css"


function ToDo(props) {

    const [isActive, setActive] = useState("false");


    function handleRemove() {
        const id = props.data.id;
        props.removeTodo(id);
    }

    function markedDone() {
        setActive(!isActive);
    }

// `post-wrapper ${this.state.loading ? 'post-wrapper--loading' : ''}`

  return (
  <div onClick={markedDone} className={styles.container} >
      
            <div className={`${styles.titleText} ${isActive ? null : styles.markedDone}`}>
                {props.data.title}
            </div>
            <button className={styles.remove} onClick={handleRemove} >🗑️</button>
  </div>

  )
}

export default ToDo