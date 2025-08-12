//  interface CartProps {
//     items: Product[];
//     onRemove: (productId: string) => void;
//     open: boolean;
//     onClose: ()
//  }
import type { Product } from "../../types/product";
import "./cart.css"

interface CartProps {
  items: Product[];
  onRemove: (productId: string) => void;
  open: boolean;
  onClose: () => void;
}

// Componente do carrinho de compras
export function Cart({ items, onRemove, open, onClose }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
    {/* Overlay escurecido (fundo) */}
    <div className={`cart-overlay ${open ? 'show' : ''}`} onClick={onClose}></div>

    {/* Cart Off-Canvas ("escondido" na lateral direita) */}
    <aside className={`cart-offcanvas ${open ? 'open' : ''}`}>
      <button className="cart-close" onClick={onClose}>×</button>

      <h2>Produtos no Carrinho</h2>
      <hr />
      {items.length === 0 && <p>Seu carrinho de compras está vazio.</p>}
      {items.map(product => (
        <div key={product.id} className="cart-item">
          {product.name} - {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          <button
            onClick={() => onRemove(product.id)}
            title="Remover"
            className="cart-remove-btn">×</button>
        </div>
      ))}
      <h3>Total: {total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
    </aside>
    </>
  );
}