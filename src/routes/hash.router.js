import HashManagerMongo from "../crud/hash.js"
import { Router } from 'express'
import randomString from "../randomHash.js";
import randomDescuento from "../randomDescuento.js";

const router = Router();
const hashManager = new HashManagerMongo();

router.get("/create",async (req, res) => {
  const newHash = randomString()
  const newDescuento = randomDescuento()
  console.log(newHash)
  console.log(newDescuento)
  try {
    const hash = await hashManager.createHash(newHash, newDescuento);
    res.json(hash);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

export default router;