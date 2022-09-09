import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { Low, JSONFile } from "lowdb";

const __dirname = dirname(fileURLToPath(import.meta.url));

let db;

export async function crearConexion() {
  const filename = join(__dirname, "./db/productos.json");
  const adapter = new JSONFile(filename);
  db = new Low(adapter);

  await db.read()
  db.data ||= { productos: [] };
  await db.write();
}

export const conexion = () => db;
