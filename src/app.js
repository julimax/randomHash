import express from "express";
import mongoose from 'mongoose';
import hash from "./routes/hash.router.js";
import cors from "cors";

const app = express();

app.listen(8081, () => console.log('Server up'));

app.use(cors());
app.use('/hash', hash);

async function connectToDatabase() {
  const url = 'mongodb://localhost:27017/hashDB'; // Cambia la URL y el nombre de la base de datos según tus necesidades

  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado exitosamente a MongoDB');
  } catch (error) {
    console.error('Error al conectarse a MongoDB:', error);
    process.exit(1); // Finalizar la aplicación si no se puede conectar a la base de datos
  }
}

connectToDatabase();
