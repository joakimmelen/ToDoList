import React, {useEffect, useState} from 'react'
import './App.css';
import InputBox from './components/InputBox';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState(() => {
    return getTodos();
  });

  function addTodo(input) {

    if (input !== "")
    setTodos((prevTodos) => {
      return [
        ...prevTodos, 
        { id: Math.random().toString(), title: input }
      ];
    });
  }

  // function updateTodos() {
  //   console.log("tja");
  //   const dataFlow = todos;
  //   saveTodos(dataFlow);
  // }


  function removeTodo(id) {
    const newTodos = [...todos].filter((todo) => todo.id !== id)
    setTodos(newTodos);
    saveTodos(newTodos);
    }


    function getTodos() {
      const rawData = window.localStorage.getItem("myTodos");
      if (!rawData) {
        return [];
      }
      const data = JSON.parse(rawData);
      return data;
    }

    function saveTodos(updated) {
      const data = JSON.stringify(updated)
      window.localStorage.setItem("myTodos", data)
    }

    function resetTodos() {
      window.localStorage.removeItem("myTodos");
      setTodos([]);
    }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Hero">Jockes 'To-Do list'</h1>

        <InputBox 
        add={addTodo} 
        // save={updateTodos} 
        reset={resetTodos} 
        />

        <ToDoList 
        todos={todos}
        removeTodo={removeTodo}
         />

      </header>
    </div>
  );
}

export default App;
