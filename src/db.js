import mongoose from 'mongoose';

export async function connectToDatabase() {
    const url = 'mongodb://localhost:27017/hashDB'; 
  
    try {
      await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('Conectado exitosamente a MongoDB');
    } catch (error) {
      console.error('Error al conectarse a MongoDB:', error);
      process.exit(1); // Finalizar la aplicación si no se puede conectar a la base de datos
    }
  }
  
  