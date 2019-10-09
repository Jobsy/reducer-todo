import React, { useState, useReducer } from "react";
import "../styles.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { initialState, reducer } from "../reducers/reducer";




const Todo = () => {

  const [state, setState] = useState({
    data: [
      {
        id: "1",
        title: "Buy Milk.",
        done: false,
        date: new Date()
      }
    ]
  }
  )


  
  
}



export default Todo;
