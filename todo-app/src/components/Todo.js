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

  function onSubmitHandle(event) {
    event.preventDefault();
    setState({
      data: [
        ...state.data,
        {
          id: Date.now(),
          title: event.target.item.value,
          done: false,
          date: new Date()
        }
      ]
    });
    event.target.item.value = "";
  }
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
