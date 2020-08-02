import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../assets/css/Products.css";
//https://leboncoin-api-gregory.herokuapp.com/offer/publish
const Products = ({ annonce, user }) => {
  const [publish, setPublish] = useState({});
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const { id } = useParams();
  /*
     const fetchData = async () => {
    try {
      const response = await axios.post(
        "https://leboncoin-api-gregory.herokuapp.com/offer/publish",
        { title: title, description: description, price: price,  }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
    
   
   */
  return (
    <>
      <div className="publish">
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <h2>Products{id}</h2>
          {/* {console.log({annonce}) */}
          {/* <div>created{annonce}</div> */}
          <div>
            created:
            <input type="text" />
          </div>

          <div>
            id:
            <input type="text" />
          </div>
          <div>
            title:
            <input
              type="text"
              value={title}
              onChange={(event) => {
                // console.log(email);
                setTitle(event.target.value);
                console.log(title);
              }}
            />
          </div>
          <div>
            description:
            <input
              type="text"
              value={description}
              onChange={(event) => {
                // console.log(email);
                setDescription(event.target.value);
                console.log(description);
              }}
            />
          </div>
          <div>
            price:
            <input type="text" />
          </div>
          <div>picture</div>
          <div>
            Creator username:
            <input type="text" />
          </div>
          <div>
            <button>Publier</button>
          </div>
        </form>
        <Link to="/home">home</Link>
      </div>
    </>
  );
};

export default Products;
