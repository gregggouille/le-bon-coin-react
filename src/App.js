import React, { useState } from "react";
// import axios from "axios";
import "./App.css";
// import Cookies from "js-cookie";
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
// import Footer from "./components/Footer";
function App() {
  const [user, setUser] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [search, setSearch] = useState("");
  return (
    <>
      <Router>
        <Header
          user={user}
          setUser={setUser}
          search={search}
          setSearch={setSearch}
        />
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/offers">
            <Offers />
          </Route>
          <Route exact path="/offer/:id/">
            <Offer />
          </Route>
          <Route path="/profile">
            <Profile
              username={username}
              setUserName={setUsername}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </Route>
          <Route path="/products">
            <Products />
            <Route path="/search">
              <Search search={search} />
            </Route>
          </Route>
          <Route path="/login">
            <Login
              setUser={setUser}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          </Route>

          <Route path="/signup">
            <Signup
              user={user}
              setUser={setUser}
              email={email}
              setEmail={setEmail}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
            />
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
