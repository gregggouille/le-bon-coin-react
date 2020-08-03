import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import "../assets/css/Login.css";
import Cookies from "js-cookie";
const Login = ({ setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://leboncoin-api-gregory.herokuapp.com/user/log_in",
        {
          email: email,
          password: password,
        }
      );
      if (response.data.token) {
        // console.log("login====>" + response.data);
        // Sauvegarder le token dans un Cookie
        Cookies.set("token", response.data.token);
        // Remplacer le bouton "se connecter" par "se déconnecter"
        setUser({ token: response.data.token });

        // Rediriger l'utilisateur vers la homepage
        history.push("/");
      }
    } catch (error) {
      if (error.response.status === 401) {
        alert("Mauvais email et/ou mot de passe");
      }
    }
  };

  return (
    <>
      <div className="login">
        <h1>Connexion</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <div>
          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
