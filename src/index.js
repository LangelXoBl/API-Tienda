import app from "./app.js";
import { crearConexion } from "./db.js";

crearConexion();
app.listen(3000);
console.log("Serve listen on port: ", 3000);
