import express from "express";  
import cors from "cors";  
import routes from "./route.js";  
import dotenv from "dotenv";  

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", routes);  

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🔥 Servidor rodando na porta ${PORT}`);
});
