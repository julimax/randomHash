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
          const hashFound = await this.Hash.findOne({hash: hash});
          return hashFound.descuento
        } catch (err) {
          throw new Error("Error al encontrar descuento", err);
        }
      }
    
      async deleteHash (id){
        try {
          await Hash.findByIdAndDelete(id);
          return { message: 'Delete successful' };
        } catch (err) {
          throw new Error("Error al encontrar descuento", err);
        }
      };
    }

export default HashManagerMongo;