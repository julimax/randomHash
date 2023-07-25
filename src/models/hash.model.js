import { Schema, model } from "mongoose";

const hashSchema = new Schema({
  hash: { type: String },
  descuento: { type: String },
  createdAt: { type: Date, expires: '10s', default: Date.now }
});

export const Hash = model("Hash", hashSchema);
