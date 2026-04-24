import { NavLink } from 'react-router-dom';
import logo from '../assets/img/nubdexchange_logo.png';
import { useAuth } from './AuthContext';
import Button from './Button';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition',
    isActive
      ? 'border-nu-gold bg-nu-gold text-nu-blue'
      : 'border-transparent text-white hover:border-nu-gold hover:bg-nu-white/10 hover:text-nu-gold',
  ].join(' ');

const NavBar = () => {
  const { isLoggedIn, logout, openAuthModal } = useAuth();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-nu-gold bg-nu-blue/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="BulldogEx" className="h-9 w-9 rounded-full border-2 border-nu-gold bg-nu-white object-contain" />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-white">BulldogEx Shop</p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClassName}>
              {link.label}
            </NavLink>
          ))}
          <div className="ml-2 flex items-center gap-2 border-l-2 border-nu-gold/30 pl-4">
            {isLoggedIn ? (
              <Button onClick={logout} className="h-9 border-nu-gold text-nu-gold hover:bg-nu-gold hover:text-nu-blue">Log Out</Button>
            ) : (
              <Button onClick={openAuthModal} className="h-9 border-nu-gold text-nu-gold hover:bg-nu-gold hover:text-nu-blue">Log In</Button>
            )}
          </div>
        </nav>  
      </div>
    </header>
  );
};

export default NavBar;
