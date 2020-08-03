import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import fr from "../assets/img/fr.svg";
// import Carte from "../components/Carte";
// import Products from "./Products";
const Home = () => {
  const [offre, setOffre] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://leboncoin-api-gregory.herokuapp.com/offer/with-count"
      );

      setOffre(response.data);
      setIsLoading(false);
      console.log(response.data.offre);
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
    <div className="container">
      <div className="carousel">
        {offre.offers.map((offer, index) => {
          // console.log(offer);
          return (
            <Link key={offer._id} to={`/offer/${offer._id}`}>
              <div className=" carousel offres">
                <img src={offer.picture.secure_url} alt={offre.title} />
              </div>
            </Link>
          );
        })}
      </div>
      {/* <img src={fr} alt="" /> */}
      {/* <Carte /> */}
    </div>
  );
};

export default Home;
