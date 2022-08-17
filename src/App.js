import "./App.css";
import Header from "./Mycomponents/Header";
import { Footer } from "./Mycomponents/Footer";
import { Addtodos } from "./Mycomponents/Addtodos";
import { Todos } from "./Mycomponents/Todos";
import { About } from "./Mycomponents/About";
import React, { useState, useEffect, Fragment } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  let initlist = [];
  if (localStorage.getItem("list") == null) {
    initlist = [];
  } else {
    initlist = JSON.parse(localStorage.getItem("list"));
  }
  const deleteit = (todo) => {
    console.log("i m on delete", todo);
    setlist(
      list.filter((e) => {
        return e !== todo;
      })
    );
  };
  const addtodo = (title, des) => {
    console.log("i am adding todos", title, des);
    let sno;
    if (list.length === 0) {
      sno = 0;
    } else {
      sno = list[list.length - 1].sno + 1;
    }
    const newtodo = {
      sno: sno,
      title: title,
      dec: des,
    };
    setlist([...list, newtodo]);
    console.log(newtodo);
  };
  const [list, setlist] = useState(initlist);
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <Router>
        <Header title="Todos_List" search={true} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <Addtodos addtodo={addtodo} />{" "}
                <Todos todo={list} deleteit={deleteit} />{" "}
              </Fragment>
            }
          />
          <Route path="/about"element={<About />}></Route>
        </Routes>
        

        <Footer />
      </Router>
    </>
  );
}

export default App;
