import React, { useEffect } from "react"
import HomeScreen from "./screens/HomeScreen"
import "./styles/App.scss"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LoginScreen from "./screens/LoginScreen"
import { auth } from "./firebase"
import { useDispatch, useSelector } from "react-redux"
import { login, logout, selectUser } from "./features/userSlice"
import ProfileScreen from "./screens/ProfileScreen"
import AnimeScreen from "./screens/AnimeScreen"
import MangaScreen from "./screens/MangaScreen"
import { useAuthState } from "react-firebase-hooks/auth"
import LoadingScreen from "./screens/LoadingScreen"

const App = () => {
  const User = useSelector(selectUser)
  const dispatch = useDispatch()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        )
      } else {
        //Logged out
        dispatch(logout())
      }
    })

    return unsubscribe
  }, [dispatch])

  return (
    <div className="app">
      <Router>
        {loading ? (
          <LoadingScreen />
        ) : !User ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile" exact>
              <ProfileScreen />
            </Route>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
            <Route path="/details/anime/:id" exact>
              <AnimeScreen />
            </Route>
            <Route path="/details/manga/:id" exact>
              <MangaScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  )
}

export default App
