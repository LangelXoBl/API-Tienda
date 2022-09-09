import { v4 } from "uuid";
import { conexion } from "../db.js";

export const mostratProductos = (req, res) => {
  const productos = conexion().data.productos;
  res.json(productos);
};

export const crearProducto = async (req, res) => {
  const { name, precio, descripcion } = req.body;
  const producto = {
    id: v4(),
    name,
    precio,
    descripcion,
  };

  try {
    const db = conexion();
    db.data.productos.push(producto);
    await db.write();
    res.json(producto);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const verproducto = (req, res) => {
  const found = buscar(req.params.id);
  found ? res.json(found) : res.status(404).send("Producto no encontrado");
};

export const editarproducto = async (req, res) => {
  const { name, precio, descripcion } = req.body;
  const found = buscar(req.params.id);
  if (!found) return res.status(404).send("Producto no encontrado");

  found.name = name;
  found.precio = precio;
  found.descripcion = descripcion;

  const result = conexion().data.productos.map((product) =>
    product.id == req.params.id ? (product = found) : product
  );
  conexion().data.productos = result;
  await conexion().write();
  res.status(200).send("Producto actualizado");
};

export const eliminarproducto = async (req, res) => {
  const found = buscar(req.params.id);
  if (!found) return res.status(404).send("Producto no encontrado");

  const newData = conexion().data.productos.filter(
    (prod) => prod.id !== req.params.id
  );
  conexion().data.productos = newData;
  await conexion().write();
  res.status(200).send("Procuto eliminado");
};

function buscar(id) {
  const producto = conexion().data.productos.find(
    (producto) => producto.id == id
  );
  return producto;
}
