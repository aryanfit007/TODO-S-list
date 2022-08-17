import React from "react";
import { Lists } from "./Lists";

export const Todos = (props) => {
  let mystyle = {
    minHeight: "50vh",
    margin: "auto",
  };
  return (
    <div className="container py-3 text-center" style={mystyle}>
      <h3>Todo-Lists</h3>
      {props.todo.length === 0
        ? "nothing on the list"
        : props.todo.map((elem) => {
            return (
              <Lists show={elem} key={elem.sno} deleteit={props.deleteit} />
            );
          })}
    </div>
  );
};
