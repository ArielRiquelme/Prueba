import axios from "axios";

const crearProducto = async (data) => {
  try {
    await axios.post("http://localhost:8000/api/mascotas/new", data);
    return { success: true };
  } catch (err) {
    console.error(err);
    return { success: false };
  }
};

const getProductos = async () => {
  try {
    const { data } = await axios.get("http://localhost:8000/mascotas/productos/");
    return { success: true, data };
  } catch (err) {
    console.error(err);
    return { success: false, data: [] };
  }
};

const getUnProducto = async (id) => {
  try {
    const { data } = await axios.get(`/api/mascotas/${id}`);
    return { success: true, data };
  } catch (err) {
    console.error(err);
    return { success: false, data: null };
  }
};

export { crearProducto, getProductos, getUnProducto };
