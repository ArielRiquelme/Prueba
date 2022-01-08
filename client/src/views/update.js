import React, { useState, useEffect } from "react";
import axios from "axios";
import "./update.css";

const Update = ({ id }) => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8000/api/mascotas/" + id).then((res) => {
      setNombre(res.data.nombre);
      setTipo(res.data.tipo);
      setDescripcion(res.data.descripcion);
      setSkill1(res.data.skill1);
      setSkill2(res.data.skill2);
      setSkill3(res.data.skill3);
    });
  }, [id]);
  const updateMascota = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/api/mascotas/update/" + id, {
        nombre,
        tipo,
        descripcion,
        skill1,
        skill2,
        skill3,
      })
      .then((res) => console.log(res));
  };
  return (
    <>
      <h1>Pet Shelter</h1>
      <h2>Edit {nombre}</h2>
      <div>
        <form onSubmit={updateMascota}>
          <p>
            <label>Nombre </label>
            <br />
            <input
              className="form-control"
              minlength="3"
              type="text"
              name="nombre"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </p>
          <p>
            <label>Tipo: </label>
            <br />
            <input
              className="form-control"
              minlength="3"
              type="text"
              name="tipo"
              value={tipo}
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            />
          </p>
          <p>
            <label>Descripcion: </label>
            <br />
            <input
              className="form-control"
              minlength="3"
              type="text"
              name="descripcion"
              value={descripcion}
              onChange={(e) => {
                setDescripcion(e.target.value);
              }}
            />
          </p>
          <p>
            <label>Skill 1: </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="skill1"
              value={skill1}
              onChange={(e) => {
                setSkill1(e.target.value);
              }}
            />
          </p>
          <p>
            <label>Skill 2: </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="skill2"
              value={skill2}
              onChange={(e) => {
                setSkill2(e.target.value);
              }}
            />
          </p>
          <p>
            <label>Skill 3: </label>
            <br />
            <input
              className="form-control"
              type="text"
              name="skill3"
              value={skill3}
              onChange={(e) => {
                setSkill3(e.target.value);
              }}
            />
          </p>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Update;
