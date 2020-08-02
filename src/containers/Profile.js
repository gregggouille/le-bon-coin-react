import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Profile = ({
  user,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
}) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://leboncoin-api-gregory.herokuapp.com/user/${params.id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <>
      <Link to="/signup">signup</Link>
      <div>
        <h1>Profile</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert("on Submit");
          }}
        >
          <div>
            <input
              type="text"
              value={data.user}
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              type="email"
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
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              onSubmit={() => {
                console.log("ok");
              }}
            >
              mettre à jour
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Profile;
