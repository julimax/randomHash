import { model, Schema } from "mongoose";

const hashSchema = Schema({
  hash: { type: String },
  descuento: { type: String },
  createdAt: { type: Date, expires: '14d', default: Date.now }
});

export const Hash = model("hash", hashSchema);


const nuevoHash = new Hash({
  hash: 'valor-del-hash',
  descuento: 'valor-del-descuento',
  createdAt: Date.now(), // Puedes usar la fecha y hora actual o alguna fecha específica que hayas obtenido del formulario
  expires: String, // Asignar el tiempo de expiración personalizado
});