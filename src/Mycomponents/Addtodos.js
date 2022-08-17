// import React from "react";
import React, { useState } from 'react';

export const Addtodos = (props) => {
    const [title, setTitle] = useState("")
    const [des, setDes] = useState("")
    const submit=(e)=>{
        e.preventDefault()
        if(!title||!des){
            alert("title aur des cannot be empty")
        }
        else{
            props.addtodo(title,des)
            setDes("")
            setTitle("")
        }
    }
  return (
    <div className="container py-4 pl-4 pr-4 m-auto">
      <h3 className="text-center">Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo
          </label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="des" className="form-label">
            Description
          </label>
          <input type="text" value={des} onChange={(e)=>setDes(e.target.value)} className="form-control" id="des" />
        </div>
        <button type="submit" className="btn btn-outline-success">
          Submit
        </button>
      </form>
    </div>
  );
};
