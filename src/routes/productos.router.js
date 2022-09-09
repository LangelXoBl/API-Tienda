import { Router } from "express";
import * as ctrlProcuctos from "../controllers/productos.controller.js";
import { producto } from "../validators/product.Validators.js";

const router = Router();

router.get("/", ctrlProcuctos.mostratProductos);
router.post("/", producto, ctrlProcuctos.crearProducto);
router.get("/:id", ctrlProcuctos.verproducto);
router.put("/:id", producto, ctrlProcuctos.editarproducto);
router.delete("/:id", ctrlProcuctos.eliminarproducto);

export default router;
