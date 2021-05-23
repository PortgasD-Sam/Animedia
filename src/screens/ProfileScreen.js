import React from "react"
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import Nav from "../components/Nav"
import { selectUser } from "../features/userSlice"
import { auth } from "../firebase"
import "../styles/ProfileScreen.scss"

const ProfileScreen = () => {
  const user = useSelector(selectUser)
  const history = useHistory()

  return (
    <div className="profileScreen">
      <Nav />

      <div className="profileScreen__body">
        <h1>About</h1>

        <div className="profileScreen__info">
          <img
            src="https://avatarfiles.alphacoders.com/758/75843.jpg"
            alt="avatar"
          />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>

            <div className="profileScreen__plans">
              <h3>Description</h3>
              <p>This website was made by Sambit Ekka.</p>
              <p>
                Made with the purpose of studying and using React, Redux and
                Firebase.
              </p>
              <button
                className="profileScreen__signOut"
                onClick={() => {
                  history.push("/")
                  auth.signOut()
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
