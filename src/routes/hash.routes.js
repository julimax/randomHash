import HashManagerMongo from "../controllers/hash.js"
import { Router } from 'express'
import randomString from "../functions/randomHash.js";
import randomDescuento from "../functions/randomDescuento.js";
import { authRequired } from "../middlewares/validateToken.js";


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

router.post("/getDesc", async (req, res) => {
  const { hash } = req.body;
  try {
    const descuento = await hashManager.getDesc(hash);
    if (descuento !== null) {
      res.json({ descuento }); // Enviar el descuento dentro de un objeto JSON
    } else {
      res.status(404).json({ error: "Descuento no encontrado." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al obtener el descuento." });
  }
});

router.post("/createDesc",authRequired , async (req, res) => {
  const { hash, descuento } = req.body;
  console.log(hash, descuento)
  try {
    // Agregar el símbolo de porcentaje (%) al valor del descuento antes de pasarlo a hashManager.createHash
    const descuentoConPorcentaje = `${descuento} % de descuento`;
    await hashManager.createHash(hash, descuentoConPorcentaje);
    res.status(200).json({ message: "descuento creado" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Error al crear el descuento." });
  }
});

router.delete('/delete/:id', authRequired, async (req, res) => {
  const id = req.params.id;

  try {
    // Intenta eliminar el dato por su _id
    const resultado = await hashManager.deleteHash(id);

    if (resultado) {
      // El dato se eliminó exitosamente
      res.status(200).json({ message: 'Dato eliminado exitosamente.' });
    } else {
      // No se encontró el dato con el _id proporcionado
      res.status(404).json({ error: 'Dato no encontrado.' });
    }
  } catch (error) {
    // Ocurrió un error al intentar eliminar el dato
    console.error('Error al eliminar el dato:', error);
    res.status(500).json({ error: 'Error al eliminar el dato.' });
  }
});




export default router;