import axios from "axios";

const API_URL = "https://fakestoreapi.com/products?limit=50";


export const fetchProductsAPI = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
