 import type { Product } from "../../types/product";
import "./product-card.css";

interface ProductCardProps {
    product: Product;
    onBuy: (product: Product) => void;
}

// Componente visual que exibe um card de produto
export function ProductCard({ product, onBuy }: ProductCardProps) {
  return (
    <div className='product-card'>
      <img src={product.picture} alt={product.name} />

      <div className="product-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      
        <div className="product-footer">
          <h4>{product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h4>
          <button onClick={() => onBuy(product)}>Comprar</button>
        </div>
      </div>
    </div>
  );
}