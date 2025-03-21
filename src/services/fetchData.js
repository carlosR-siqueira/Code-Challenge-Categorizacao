const { default: fetch } = await import("node-fetch");  

const fetchData = async () => {
  const url = "https://categorizacao-db-default-rtdb.firebaseio.com/.json";  
  try {
    const response = await fetch(url);  
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    const data = await response.json(); 
    return data;
  } catch (error) {
    console.error("Erro:", error);
    throw error;  
  }
};

export default fetchData;  
