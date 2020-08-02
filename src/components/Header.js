import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../assets/css/Header.css";
import Cookies from "js-cookie";
const Header = ({ user, setUser, search, setSearch }) => {
  const history = useHistory();

  return (
    <>
      <header>
        <div className="nav2">
          <div className="logo">
            <Link to="/home">Le Bon Coin</Link>
          </div>
          <div>
            <input
              type="text"
              value={search}
              placeholder="recherche"
              onChange={(event) => {
                setSearch(event.target.value);
                console.log(search);
              }}
              onClick={() => {
                console.log("clicked");
              }}
            />
          </div>
          {user === null ? (
            <Link to="/login">Login</Link>
          ) : (
            <div
              onClick={() => {
                // supprimer le cookie
                Cookies.remove("token");
                // modifier l'état user
                setUser(null);
                // setUser(false);
                // rediriger l'utilisateur vers login
                history.push("/login");
              }}
            >
              Se déconnecter
            </div>
          )}
        </div>
        <nav>
          <button>
            <Link to="/offers">Offers</Link>
          </button>
          <button>
            <Link to="/products">Products</Link>
          </button>
          {user === null ? (
            " "
          ) : (
            <button>
              <Link to="/profile">profile</Link>
            </button>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
