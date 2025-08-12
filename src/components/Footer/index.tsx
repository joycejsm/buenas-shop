 import './footer.css';

export function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Buenas Shop</span>
        <span>
          Desenvolvido por <a href="https://bgtech.com.br/" target="_blank" rel="noopener noreferrer">{`BGTech { experience }`}</a>
        </span>
      </div>
    </footer>
  );
}
