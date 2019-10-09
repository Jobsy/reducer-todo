import React from "react";

const TodoForm = (props) => {

  return (
    <form onSubmit={props.onSubmitHandle}>
      <input type="text" name="item" className="item" />
      <button className="btn-add-item">Add</button>
    </form>

  )


}

export default TodoForm;


