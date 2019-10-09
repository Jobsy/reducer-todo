import React from "react";

const TodoList = (props) => {

  return (
    <ul>
      <li key={props.key} className={props.done ? "done" : "hidden"}>
        {props.title}
        <button onClick={props.onDeleteHandle}>Delete</button>
        <button onClick={props.onCompleteHandle}>Complete</button>
      </li>
    </ul>
  )
}


export default TodoList;

