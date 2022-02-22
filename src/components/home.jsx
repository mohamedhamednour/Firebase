import React from "react";
import "../App.css";
import { Link, Route, Routes} from "react-router-dom";
import Create from "./Todo/create";
import Update from "./Todo/update";


import { Shoping } from "./Todo/shoping";

export const Home = () => {
  
  return (
    <>
      
      <div className="row">
        <div className="col-3 dashhord">
          <ul>
            <li>
              <Link to="/home/create"> Create image</Link>
              <br></br>
            </li>
            <li>
              <Link to="/home/update">update</Link>
            </li>
            <li>
              <Link to="/">show prodact</Link>
            </li>
          </ul>
        </div>

        <div className="col-9">
         
       
          <Routes>
            {/* <Route exact path="home" element={<PrivateRoute><Home /></PrivateRoute>} /> */}

            <Route path="/home/create" element={<Create />} />
            <Route path="/home/update" element={<Update />} />
            <Route path="/" element={<Shoping />} />

          </Routes>
        </div>
      </div>
    </>
  );
};
