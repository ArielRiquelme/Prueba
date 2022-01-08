import React from "react";
import { Link } from "@reach/router";
import 'bootstrap/dist/css/bootstrap.css';

const Formulario = ({ people }) => {
    
  return (
    <div>
        
      <h1>Pet Shelter</h1>
      <Link to={`/mascotas/new`}>add a pet to the shelter</Link>
      <h2>These pets are looking for a good home</h2>
      <table className="table table-striped table-dark">
        <tbody>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
          {people.map((mascotas, idx) => {
            return (
              <>
                <tr key={idx}>
                  <td>{mascotas.nombre}</td>
                  <td>{mascotas.tipo}</td>
                  <td>
                    {" "}
                    <Link to={`/mascotas/${mascotas._id}`}>
                      <button className="btn btn-info">Detalles</button>
                    </Link>
                    <Link to={`/mascotas/update/${mascotas._id}`}>
                      <button className="btn btn-warning">Actualizar</button>
                    </Link>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
    
  );
};

export default Formulario;
