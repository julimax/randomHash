import { Hash } from "../models/hash.model.js";

class HashManagerMongo {
    constructor() {
        this.Hash = Hash;
    }

    async createHash(hash, descuento) {
        console.log(hash, descuento)
        console.log(typeof descuento)
        console.log("sad")
        try {
          return await this.Hash.create({ hash, descuento });
        } catch (err) {
          throw new Error("Error al crear hash", err);
        }
      }


}

export default HashManagerMongo;