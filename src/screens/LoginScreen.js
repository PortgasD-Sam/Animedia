import React, { useState } from "react"
import "../styles/LoginScreen.scss"
import SigninScreen from "./SigninScreen"

const LoginScreen = () => {
  const [signin, setSignin] = useState(false)

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <div className="loginScreen__logo">
          <span className="loginScreen__logo-first">ANI</span>
          <span className="loginScreen__logo-second">MEDIA</span>
        </div>

        <button className="loginScreen__button" onClick={() => setSignin(true)}>
          Login
        </button>

        <div className="loginScreen__gradient" />

        <div className="loginScreen__body">
          {signin ? (
            <SigninScreen />
          ) : (
            <>
              <h1>Unlimited anime, mangas, movies and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>Ready to watch ? Sign up for free now.</h3>

              <button
                className="loginScreen__signin"
                onClick={() => setSignin(true)}
              >
                GET STARTED
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
