
import React, { useState, useReducer } from "react";
import "../styles.css";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { initialState, reducer } from "../reducers/reducer";


const Todo = () => {

  const [state, dispatch] = useReducer(reducer, initialState);

  function onSubmitHandle(event) {
   
    event.preventDefault();
    dispatch({
      
      type: "ADD_TODO",
      payload: event.target.item.value,
    });

    event.target.item.value = "";
  }

  function onDeleteHandle(id) {
        dispatch({
       type: "DELETE",
    payload: id
    });
  }

  function removeAllTodosThatAreComplete() {

       dispatch({
            type: "REMOVE_ALL"
    });
  };

  function onUpdateHandle(event) {
    
    event.preventDefault();
       dispatch({
      data: state.data.map(item => {
        if (item.id === state.id) {
          item["title"] = event.target.updatedItem.value;
          return item;
        }
        return item;
      })
    });

    dispatch({
      edit: false
    });
  }

  function onCompleteHandle(id) {
  
    dispatch({
      type: "IS_COMPLETE",
      payload: id
    })
  }


  function renderEditForm() {
    
    if (state.edit) {
      return (
        <form onSubmit={onUpdateHandle}>
          <input
            type="text"
            name="updatedItem"
            className="item"
            defaultValue={state.title}
          />
          <button className="update-add-item">Update</button>
        </form>
      );
    }
  }

  return (
    <div>
      {renderEditForm()}
      {console.log("sssss: ", state)}

      <TodoForm onSubmitHandle={onSubmitHandle} />

      <button onClick={removeAllTodosThatAreComplete}>
        Remove all complete todos
        </button>

      <ul>
        {state.data.map(item => (
          <TodoList key={item.id} title={item.title} done={item.done} onDeleteHandle={() => onDeleteHandle(item.id)} onCompleteHandle={() => onCompleteHandle(item.id)} />
        ))}
      </ul>
    </div>
  );
}


export default Todo;
