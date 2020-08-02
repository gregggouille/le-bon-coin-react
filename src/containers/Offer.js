import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Offer = () => {
  const params = useParams();
  // console.log(params);

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://leboncoin-api-gregory.herokuapp.com/offer/${params.id}`
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [params.id]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div className="offer">
      <p>{data.title}</p>
      <img src={data.picture.url} alt="" />
      {/* <p></p> */}
      <p>{data.description}</p>

      <p>{data.price}</p>
    </div>
  );
};

export default Offer;
