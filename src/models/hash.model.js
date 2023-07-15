import { model, Schema } from "mongoose";

const hashSchema = Schema({
  hash: { type: String },
  descuento: { type: String }
});

export const Hash = model("hash", hashSchema);
