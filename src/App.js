import React, { useEffect } from "react";
import "./App.css";
import { HomeScreen } from "./components/homeScreen/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "./components/login/LoginScreen";
import { auth } from "./firebase";
import { getUser } from "./redux/userSelector";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./redux/actions";
import { Profile } from "./components/profile/Profile";

function App() {
  const user = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, []);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
