import { model, Schema } from "mongoose";

const hashSchema = Schema({
  hash: { type: String },
  descuento: { type: String },
  createdAt: { type: Date, expires: '14d', default: Date.now }
});

export const Hash = model("hash", hashSchema);
