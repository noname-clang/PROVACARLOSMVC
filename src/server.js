import "dotenv/config";
import express, { request } from "express";
// conexao import
import conn from "./config/conn.js";

// import modulos ( tabela )
import "./models/participantemodels.js";
import "./models/palestrantemodels.js";
import "./models/eventosmodels.js";

//import routes
import eventosrotas from "./routes/userroutes.js";

const PORT = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//utilizando rotas

app.use("/eventos", eventosrotas);


app.get("/", (request, response) => {
  response.send("oi");
});

app.listen(PORT, () => {
  console.log("Servidor on PORT " + PORT);
});
