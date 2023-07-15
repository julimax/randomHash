import HashManagerMongo from "../crud/hash.js"
import { Router } from 'express'
import randomString from "../randomHash.js";

const router = Router();
const hashManager = new HashManagerMongo();

router.get("/create",async (req, res) => {
  const newHash = randomString()
  try {
    const hash = await hashManager.createHash(newHash, "descuento");
    res.json(hash);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
})

export default router;