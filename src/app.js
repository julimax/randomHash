import express from "express";
import mongoose from 'mongoose';
import hash from "./routes/hash.router.js";
import cors from "cors";
import handlebars from "express-handlebars"
import session from "express-session";
import sessionRouter from "./routes/session.router.js"
import MongoStore from "connect-mongo";
import passport from "passport";
import initializePassport from "./config/passport.config.js";

const app = express();

app.use(cors());
app.use('/hash', hash);
app.use(express.urlencoded({extended: true}))

// handlebars
app.engine("handlebars", handlebars.engine())
app.set("views", "src/views")
app.set("view engine", "handlebars")

// passport & session
app.use(session({
  store: MongoStore.create({
      mongoUrl: "mongodb://localhost:27017/",
      dbName: "hashDB"
  }),
  secret: 'mysecret',
  resave: true,
  saveUninitialized: true
}))
initializePassport()
app.use(passport.initialize())
app.use(passport.session())
app.use('/session', sessionRouter);
async function connectToDatabase() {
  const url = 'mongodb://localhost:27017/hashDB'; 

  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado exitosamente a MongoDB');
  } catch (error) {
    console.error('Error al conectarse a MongoDB:', error);
    process.exit(1); // Finalizar la aplicación si no se puede conectar a la base de datos
  }
}


app.listen(8081, () => console.log('Server up'));

connectToDatabase();
