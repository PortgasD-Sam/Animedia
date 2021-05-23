import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import "../styles/Nav.scss"

const Nav = () => {
  const [show, handleShow] = useState(false)
  const history = useHistory()

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav__logo" onClick={() => history.push("/")}>
          <span className="nav__logo-first">ANI</span>
          <span className="nav__logo-second">MEDIA</span>
        </div>

        <img
          src="https://avatarfiles.alphacoders.com/758/75843.jpg"
          alt="nav-avatar"
          className="nav__avatar"
          onClick={() => history.push("/profile")}
        />
      </div>
    </div>
  )
}

export default Nav
