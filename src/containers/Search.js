import React, { useState, useEffect } from "react";

import axios from "axios";

const Search = ({ search }) => {
  //   const params = useParams();
  // console.log(params);
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/offer/" + { search }
      );
      console.log(response.data);
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <p>{data.title}</p>
      <p>{data.description}</p>
    </div>
  );
};

export default Search;
