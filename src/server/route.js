import express from "express";
import fetchData from "../services/fetchData.js";  
import categorizeProducts from "../utils/categorizer.js";  

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await fetchData(); 

    if (!data || data.length === 0) {
      return res.status(404).json({ error: "Nenhum dado encontrado" });
    }

    const categorizedData = categorizeProducts(data); 
    res.json(categorizedData);  
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    res.status(500).json({ error: "Erro ao buscar dados" });  
  }
});

export default router;
