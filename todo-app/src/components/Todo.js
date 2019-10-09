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

  function onDeleteHandle(id) {
    setState(state => ({

      data: state.data.filter(item => item.id !== id)
    }));
  }

  function removeAllTodosThatAreComplete() {

    setState({
      data: state.data.filter(item => !item.done)
    });
  };

  function onUpdateHandle(event) {
    event.preventDefault();

    setState({
      data: state.data.map(item => {
        if (item.id === state.id) {
          item["title"] = event.target.updatedItem.value;
          return item;
        }
        return item;
      })
    });

    setState({
      edit: false
    });
  }

  function onCompleteHandle(id) {
    setState(state => ({
      data: state.data.map(item => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          };
        } else {
          return item;
        }
      })
    }));

  }

  
  
}



export default Todo;
