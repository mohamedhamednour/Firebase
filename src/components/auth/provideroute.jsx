import React from "react"
import { useAuth } from "./usecontext"






  
  




  import { Route, Navigate, Routes, Outlet } from "react-router-dom";


export const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth()

  return currentUser ? children : <Navigate to="sign_in" />;
}