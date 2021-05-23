import React, { useRef } from "react"
import "../styles/SigninScreen.scss"
import { auth } from "../firebase"

const SigninScreen = () => {
  const loginEmailRef = useRef(null)
  const loginPasswordRef = useRef(null)
  const registerEmailRef = useRef(null)
  const registerPasswordRef = useRef(null)

  const register = (e) => {
    e.preventDefault()

    auth
      .createUserWithEmailAndPassword(
        registerEmailRef.current.value,
        registerPasswordRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((error) => {
        alert(error.message)
      })
  }

  const login = (e) => {
    e.preventDefault()

    auth
      .signInWithEmailAndPassword(
        loginEmailRef.current.value,
        loginPasswordRef.current.value
      )
      .then((authUser) => console.log(authUser))
      .catch((error) => {
        alert(error.message)
      })
  }

  const toggleForm = () => {
    const container = document.querySelector(".container")
    container.classList.toggle("active")
  }

  return (
    <div className="signinScreen">
      <section>
        <div className="container">
          <div className="user signinBx">
            <div className="imgBx">
              <img src="login.jpg" alt="" />
            </div>
            <div className="formBx">
              <form>
                <h2>Sign In</h2>
                <input
                  type="email"
                  placeholder="Email Address"
                  ref={loginEmailRef}
                />
                <input
                  type="password"
                  placeholder="Password"
                  ref={loginPasswordRef}
                />
                <button type="submit" onClick={login}>
                  Login
                </button>
                <p className="signup">
                  Don't have an account ?{" "}
                  <span onClick={toggleForm}>Sign up.</span>
                </p>
              </form>
            </div>
          </div>

          <div className="user signupBx">
            <div className="formBx">
              <form>
                <h2>Create an account</h2>
                <input
                  type="email"
                  placeholder="Email Address"
                  ref={registerEmailRef}
                />
                <input
                  type="password"
                  placeholder="Password"
                  ref={registerPasswordRef}
                />
                <button type="submit" onClick={register}>
                  Sign Up
                </button>
                <p className="signup">
                  Already have an account ?{" "}
                  <span onClick={toggleForm}>Login.</span>
                </p>
              </form>
            </div>
            <div className="imgBx">
              <img src="signup.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SigninScreen
