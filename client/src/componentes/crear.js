import React, { useState } from "react";
import axios from "axios";
import "../views/update.css";

const Crear = () => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [skill1, setSkill1] = useState("");
  const [skill2, setSkill2] = useState("");
  const [skill3, setSkill3] = useState("");

  const CrearProducto = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/mascotas/new", {
        nombre,
        tipo,
        descripcion,
        skill1,
        skill2,
        skill3,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={CrearProducto}>
      <div className="input">
        <label htmlFor="nombre">Nombre</label>
        <input
          className="form-control"
          required
          minlength="3"
          type="text"
          name="nombre"
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className="input">
        <label htmlFor="tipo">Tipo </label>
        <input
                      className="form-control"
          required
          minlength="3"
          type="text"
          name="tipo"
          id="tipo"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
      </div>

      <div className="input">
        <label htmlFor="descripcion">Descripcion</label>
        <input
                      className="form-control"
          required
          minlength="3"
          type="text"
          name="descripcion"
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="skill1">Skill 1</label>
        <input
                      className="form-control"
          type="text"
          name="skill1"
          id="skill1"
          value={skill1}
          onChange={(e) => setSkill1(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="skill2">Skill 2</label>
        <input
                      className="form-control"
          type="text"
          name="skill2"
          id="skill2"
          value={skill2}
          onChange={(e) => setSkill2(e.target.value)}
        />
      </div>
      <div className="input">
        <label htmlFor="skill1">Skill 3</label>
        <input
                      className="form-control"
          type="text"
          name="skill3"
          id="skill3"
          value={skill3}
          onChange={(e) => setSkill3(e.target.value)}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default Crear;
