import { body } from "express-validator";
import { validationResult } from "express-validator";


export const producto = [
  body("name").exists({}).withMessage("No esta definido"),
  body("precio")
    .exists()
    .withMessage("No esta definido")
    .isNumeric()
    .withMessage("No es un numero"),
  body("descripcion").isLength({max:250}).withMessage("Maximo de 250 caracteres"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });
    return next();
  },
];
