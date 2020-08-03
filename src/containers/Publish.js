import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Publish = (token) => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [file, SetFile] = useState();

  return (
    <div>
      <div>
        <h2>Déposer une annonce</h2>
        <div></div>
        <form
          onSubmit={async (event) => {
            event.preventDefault();

            try {
              token = Cookies.get("token");
              console.log(token);
              if (token) {
                const formData = new FormData();
                formData.append("title", title);
                formData.append("description", description);
                formData.append("price", price);
                formData.append("file", file);

                const response = await axios.post(
                  "https://leboncoin-api-gregory.herokuapp.com/offer/publish",
                  formData,
                  { headers: { authorization: "Bearer " + token } }
                );
                console.log(response.data);
              } else {
                history.push("/login");
              }
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <div>Titre de l'annonce :</div>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <div>Texte de l'annonce :</div>
          <input
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.description)}
          />
          <div>Prix :</div>
          <input
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.price)}
          />
          <div>Photo *</div>
          <input
            type="file"
            value={file}
            onChange={(event) => SetFile(event.target.files[0])}
          />
          <button type="submit">Déposer</button>
        </form>
      </div>
    </div>
  );
};

export default Publish;
