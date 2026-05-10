 import type { Product } from "../types/product";

 const API_URL = "https://689a9d2ee727e9657f6219ad.mockapi.io/product";

export async function fetchProducts(): Promise<Product[]> {
    const response = await fetch(API_URL);
    return response.json();
}