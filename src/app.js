import express from "express";
import hash from "./routes/hash.routes.js";
import cors from "cors";
import handlebars from "express-handlebars"
import sessionRouter from "./routes/session.routes.js"
import index from "./routes/index.routes.js"
import create from "./routes/create.routes.js"
import morgan from "morgan";
import { connectToDatabase } from "./db.js"
import cookieParser from "cookie-parser"


const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'))
app.use('/hash', hash);
app.use('/session', sessionRouter);
app.use('/index', index);
app.use('/create', create);


// handlebars
app.engine("handlebars", handlebars.engine())
app.set("views", "src/views")
app.set("view engine", "handlebars")


app.listen(8081, () => console.log('Server up'));

connectToDatabase()

