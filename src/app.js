import Express, { urlencoded } from "express";
import morgan from "morgan";
import Router from "./routes/productos.router.js";

const app = Express();
//middlewares
app.use(morgan("dev"));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

//rutas
app.use("/productos", Router);

export default app;
