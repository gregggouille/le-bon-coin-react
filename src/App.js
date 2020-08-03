import React, { useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Products from "./containers/Products";
import Profile from "./containers/Profile";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import Offers from "./containers/Offers";
import Offer from "./containers/Offer";
import Search from "./containers/Search";
import Publish from "./containers/Publish";
// import Footer from "./components/Footer";
function App() {
  // Regarder s'il y a un token dans le Cookie
  const token = Cookies.get("token");
  // console.log(token);
  const [user, setUser] = useState(token || null);
  const [username, setUsername] = useState("");

  return (
    <>
      <Router>
        <Header user={user} setUser={setUser} />
        <Switch>
          <Route path="/products">
            <Products user={user} />
          </Route>
          <Route path="/offers">
            <Offers />
          </Route>
          <Route exact path="/offer/:id/">
            <Offer />
          </Route>
          <Route path="/profile">
            <Profile username={username} setUserName={setUsername} />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/publish">
            <Publish token={token} user={user} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} user={user} />
          </Route>

          <Route path="/signup">
            <Signup username={username} setUsername={setUsername} />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
