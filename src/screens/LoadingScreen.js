import React from "react"
import { Circle } from "better-react-spinkit"
import "../styles/LoadingScreen.scss"

const LoadingScreen = () => {
  return (
    <div className="loadingScreen">
      <div className="loadingScreen__container">
        <div className="loadingScreen__logo">
          <span className="loadingScreen__logo-first">ANI</span>
          <span className="loadingScreen__logo-second">MEDIA</span>
        </div>
        <Circle color="#fd9330" size={60} className="loadingScreen__spinner" />
      </div>
    </div>
  )
}

export default LoadingScreen
