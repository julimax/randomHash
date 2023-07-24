import { Hash } from "../models/hash.model.js";

class HashManagerMongo {
    constructor() {
        this.Hash = Hash;
    }

    async createHash(hash, descuento) {
        try {
          return await this.Hash.create({ hash, descuento });
        } catch (err) {
          throw new Error("Error al crear hash", err);
        }
      }



      async getDesc(hash) {
        try {
          console.log(hash)
          const hashFound = await this.Hash.findOne({hash: hash});
          console.log(hashFound.descuento)
          return hashFound.descuento
        } catch (err) {
          throw new Error("Error al encontrar descuento", err);
        }
      }
}

export default HashManagerMongo;