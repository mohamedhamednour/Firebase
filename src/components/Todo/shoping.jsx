import React from "react";
import "../../App.css";
import { Link, Route, Routes,  Outlet } from "react-router-dom";

import {  todoapis } from "../reducer/index";
import { useSelector, useDispatch } from "react-redux";

export const Shoping = () => {
  const dispatch = useDispatch();
  const { isloading, books, error } = useSelector((state) => state.apiSlice);
  console.log(`api ${books} and ${books}`);
  React.useEffect(() => {
    dispatch(todoapis());
    console.log(`dbfhh${books}`)

  }, [dispatch]);
  return (
    <>
      <div className="row">
         

        <div className="col-10">
          {!error && (
            <div class="alert alert-danger mb-0" role="alert">
              <p> error 404{error}</p>
            </div>
          )}
          <div className="row ">
          {books
            ? books.map((item) => [
              <div className="col-3"><img key={item.id} src={item.image} /></div>
            ,])
            : ""}
            </div>
         
        </div>
      </div>
    </>
  );
};
