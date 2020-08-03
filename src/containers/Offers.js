import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import "../assets/css/Offers.css";
import axios from "axios";

const Offers = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      "https://leboncoin-api-gregory.herokuapp.com/offer/with-count"
    );
    // console.log(response.data.secure_url);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="offres">
      {data.offers.map((offer, index) => {
        // console.log(offer._id);
        return (
          <Link key={offer._id} to={`/offer/${offer._id}`}>
            <div style={{ border: "1px solid black", marginLeft: 50 }}>
              <img src={offer.picture.secure_url} alt="" />
              <p>{offer.title}</p>
              <p>{offer.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Offers;
