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
    // console.log(response.data);
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // let page = 2;

  // console.log(typeof page);//number
  // let limit = 25;
  // let skip = page * limit;
  // console.log(skip);
  // console.log(typeof skip);//number
  // let nbPage = (page - 1) * limit;
  // let skip2 = limit + skip;

  // let page2 = limit + skip2;

  // if (data.count < limit) {
  //   console.log("page1");
  // } else {
  //   console.log("page1+");
  // }
  // pagination();
  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="offres">
      {data.offers.map((offer, index) => {
        // console.log(offer._id);
        return (
          <Link key={offer._id} to={`/offer/${offer._id}`}>
            <div style={{ border: "1px solid black", marginLeft: 50 }}>
              <img src={offer.picture.url} alt="" />
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
