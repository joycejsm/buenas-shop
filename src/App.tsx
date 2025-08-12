import { useEffect, useState } from "react";
import type { Product } from "./types/product";
import { fetchProducts } from "./services/mockapi";
import { Nav } from "./components/NavBar";
import { Cart } from "./components/Cart";
import { ProductCard } from "./components/ProductCard";

function App() {
    const [products, setProducts] = useState<Product[]>([]);
    const [cart, setCart] = useState<Product[]>([]);
    const [cartOpen, setCartOpen] = useState(false);

    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);

    // Função para adicionar produto ao carrinho
    function handleBuy(product: Product) {
        setCart([...cart, product]);
    }

    // Função para remover produto do carrinho
    function handleRemove(productID: string) {
        setCart(cart.filter((product) => product.id !== productID));
    }

    function toggleCart() {
        setCartOpen(!cartOpen);
    }

    return (
        <>
        <Nav onCartClick={toggleCart}  />

        {/* <ProductCard /> */}

        <div className="products-container">
                {products.map(product => (
                    <ProductCard 
                        key={product.id}
                        product={product}
                        onBuy={() => handleBuy(product)}
                    />
                ))}
            </div>

        <Cart 
         items={cart}
         onRemove={handleRemove}
         open={cartOpen}
         onClose={() => setCartOpen(false)}
        
        />
        </>
    );
}

export default App;

