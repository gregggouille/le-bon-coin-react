import React from "react";
import axios from "axios";
import "../assets/css/Signup.css";
import { Link, useHistory } from "react-router-dom";
const Signup = ({
  user,
  setUser,
  email,
  setEmail,
  username,
  setUsername,
  password,
  setPassword,
}) => {
  // const [email, setEmail] = useState("");
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  const history = useHistory();
  const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://leboncoin-api-gregory.herokuapp.com/user/sign_up",
        { username: username, email: email, password: password }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Link to="/home"></Link>
      <div className="signup">
        <h3>Créez un compte</h3>
        <div className="signupContainer">
          <div className="signupContainer1">
            <h5>Gagnez du temps</h5>
            <p>
              Publiez vos annonces rapidement, avec vos informations
              pré-remplies chaque fois que vous souhaitez déposer une nouvelle
              annonce.
            </p>
            <h5>Soyez les premiers informés</h5>
            <p>
              Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce
              qui vous intéresse.
            </p>
            <h5>Visibilité</h5>
            <p>
              Suivez les statistiques de vos annonces (nombre de fois où votre
              annonce a été vue, nombre de contacts reçus).
            </p>
          </div>
          <div className="signupContainer2">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                fetchData();
                console.log(username, email, password);
              }}
            >
              <div>
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(event) => {
                    // console.log(username);
                    setUsername(event.target.value);
                  }}
                />
              </div>
              <div>
                <input
                  type="email"
                  value={email}
                  placeholder="email"
                  onChange={(event) => {
                    // console.log(email);
                    setEmail(event.target.value);
                    console.log(email);
                  }}
                />
              </div>
              <div>
                <input
                  type="password"
                  value={password}
                  placeholder="password"
                  onChange={(event) => {
                    // console.log(password);
                    setPassword(event.target.value);
                  }}
                />
              </div>

              <button
                type="submit"
                onClick={() => {
                  // Requête vers le serveur pour se connecter
                  // const token = "1234";
                  // Sauvegarder le token dans un Cookie
                  // Cookies.set("token", token);
                  // Remplacer le bouton "se connecter" par "se déconnecter"
                  // setUser({ token: token })
                  // Rediriger l'utilisateur vers la homepage
                  history.push("/login");
                }}
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
