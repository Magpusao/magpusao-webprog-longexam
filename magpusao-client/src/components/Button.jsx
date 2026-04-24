import { Link } from 'react-router-dom';

const variantClasses = {
  primary: 'bg-nu-blue text-white border-nu-blue hover:bg-nu-gold hover:border-nu-gold hover:text-nu-blue',
  secondary: 'bg-white text-nu-blue border-nu-blue hover:bg-nu-blue hover:text-white',
};

const Button = ({
  children,
  to,
  type = 'button',
  variant = 'secondary',
  className = '',
  onClick,
}) => {
  const classes = [
    'inline-flex items-center justify-center rounded-full border-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.24em] transition',
    variantClasses[variant] ?? variantClasses.secondary,
    className,
  ]
    .join(' ')
    .trim();

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
