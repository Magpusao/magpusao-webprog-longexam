import { Link } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-zinc-900 bg-zinc-900 px-4 py-12 text-zinc-50 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="BulldogEx" 
                className="h-10 w-10 rounded-full border-2 border-zinc-50 bg-zinc-50 object-contain" 
              />
              <span className="text-xl font-bold tracking-tight">BulldogEx Shop</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Your one-stop shop for campus essentials. We provide high-quality products 
              designed for the modern student lifestyle.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Shop</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li><Link to="/products" className="hover:text-white transition-colors">All Products</Link></li>
                <li><Link to="/products?category=Bags" className="hover:text-white transition-colors">Bags</Link></li>
                <li><Link to="/products?category=Stationery" className="hover:text-white transition-colors">Stationery</Link></li>
                <li><Link to="/products?category=Drinkware" className="hover:text-white transition-colors">Drinkware</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Support</h3>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Stay Updated</h3>
            <p className="text-sm text-zinc-400">Get notified about new arrivals and exclusive student discounts.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-white focus:border-zinc-500 focus:outline-none"
              />
              <button className="rounded-full bg-zinc-50 px-4 py-2 text-sm font-bold text-zinc-900 hover:bg-zinc-200 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between border-t border-zinc-800 pt-8 sm:flex-row">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} BulldogEx Shop. All rights reserved.
          </p>
          <div className="mt-4 flex gap-6 sm:mt-0">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
