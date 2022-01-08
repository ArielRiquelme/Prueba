import React, { useEffect, useState } from "react";
import axios from "axios";

const Detail = ({ id, removeFromDom }) => {
  console.log(id);
  const [mascotas, setMascotas] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/api/mascotas/" + id).then((res) => {
      console.log(res.data);
      setMascotas(res.data);
    });
  }, [id]);

  const deleteProducto = (personId) => {
    axios
      .delete("http://localhost:8000/api/mascotas/delete/" + personId)
      .then((res) => {
        removeFromDom(personId);
      });
  };

  return (
    <>
      <h1>Pet Shelter</h1>
      <h2>Details about {mascotas.nombre}</h2>
      <button
        onClick={(e) => {
          deleteProducto(mascotas._id);
        }}
      >
        Adopt {mascotas.nombre}
      </button>
      <div className="card">
        <p>tipo: {mascotas.tipo}</p>
        <p>Descripcion: {mascotas.descripcion}</p>
        <p>Skill 1: {mascotas.skill1}</p>
        <p>Skill 2: {mascotas.skill2}</p>
        <p>Skill 3: {mascotas.skill3}</p>
      </div>
    </>
    );
};



export default Detail;
