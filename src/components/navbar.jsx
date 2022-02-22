import React, { useState } from "react"

import "../App.css";
import { useAuth } from "../components/auth/usecontext"
import { useNavigate } from "react-router-dom";



export default function Navbar() {
  const navigate = useNavigate();
  const [error, setError] = useState("")


  const {  logout } = useAuth()


  

  async function handleLogout() {
    setError("")

    try {
      await logout()
      localStorage.removeItem("authTokens");

      navigate("sign_in")
    } catch {
      setError("Failed to log out")
    }
  }
  
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
 
        <li class="nav-item">
          <a onClick={handleLogout} class="nav-link" href="#">Log out</a>
        </li>
     
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}
