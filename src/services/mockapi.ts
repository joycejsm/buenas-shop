 import type { Product } from "../types/product";

 const API_URL = "https://67620a7446efb3732373870b.mockapi.io/api/product";

export async function fetchProducts(): Promise<Product[]> {
    const response = await fetch(API_URL);
    return response.json();
}