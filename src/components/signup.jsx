import React, { useRef, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useAuth } from "../components/auth/usecontext"
import { Form, Button, Card, Alert } from "react-bootstrap"


import "../App.css";

export default function Signup() {
  const navigate = useNavigate();

  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup, currentUser } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/");


    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }


  return (
    <>
      <div className="center">
        {error && <Alert variant="danger">{error}</Alert>}

        <form onSubmit={handleSubmit} className="col-12">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              ref={emailRef}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              ref={passwordRef}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              confirm Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword2"
              ref={passwordConfirmRef}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            sugn up
          </button>
          <h5>
          login by phone? <Link to="/phone"> phone</Link><br></br>

            Already have an account? <Link to="/sign_in">Log In</Link>
          </h5>
        </form>
      </div>
    </>
  );
}
