import fetchData from "./services/fetchData.js";  
import categorizeProducts from "./utils/categorizer.js";  

const run = async () => {
  try {
    const products = await fetchData();  
    if (products) {
      const categorized = categorizeProducts(products);  
      console.log(JSON.stringify(categorized, null, 2));  
    } else {
      console.log("Nenhum produto encontrado.");
    }
  } catch (error) {
    console.error("Erro no processamento:", error);
  }
};

run();
