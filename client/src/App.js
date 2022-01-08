import React, { useState, useEffect } from "react";
import Formulario from "./componentes/formulario";
import axios from "axios";
import Detail from "./views/Detail";
import { Router } from "@reach/router";
import Crear from "./componentes/crear";
import Update from "./views/update";

function App() {
  const [people, setPeople] = useState([]);
 

  useEffect(() => {
    axios.get("http://localhost:8000/api/mascotas").then((res) => {
      setPeople(res.data);

    });
  }, []);

  const removeFromDom = personId => {
    setPeople(people.filter(person => person._id !== personId));
}

  return <div>
      <Router>
        <Detail path="/mascotas/:id" removeFromDom={removeFromDom}/>
        <Update path="/mascotas/update/:id"/>
        <Formulario path="/" people={people} />
        <Crear path="mascotas/new" />
      </Router>
  </div>;
}

export default App;
