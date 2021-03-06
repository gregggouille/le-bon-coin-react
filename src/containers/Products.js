import React, { useState } from "react";

import "../assets/css/Products.css";
import axios from "axios";

const Products = ({ user }) => {
  const token = user;
  // console.log(token);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState();

  const formData = new FormData(); // class JavaScript
  formData.append("title", title);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("picture", file);

  const fetchData = async () => {
    const response = await axios.post(
      "https://leboncoin-api-gregory.herokuapp.com/offer/publish",
      formData,
      { headers: { authorization: "Bearer " + token } }
    );
    console.log(response.data);
  };

  return (
    <>
      <div className="publish">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            fetchData();
          }}
        >
          <h2>Annonce</h2>
          <div>
            <input
              type="text"
              value={title}
              placeholder="title:"
              onChange={(event) => {
                setTitle(event.target.value);
                // console.log(title);
              }}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder=" description:"
              value={description}
              onChange={(event) => {
                setDescription(event.target.value);
                // console.log(description);
              }}
            />
          </div>
          <div>
            <input
              type="number"
              value={price}
              placeholder="price:"
              onChange={(event) => {
                // console.log(email);
                setPrice(event.target.value);
                // console.log(price);
              }}
            />
          </div>
          <div>
            <input
              // multiple={true}
              type="file"
              onChange={(event) => {
                setFile(event.target.files[0]);
              }}
            />
          </div>
          {/* <div>{token}</div> */}
          <div>
            <button type="submit">Publier</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Products;
