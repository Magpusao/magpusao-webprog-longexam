import React from 'react';

const Section = ({
  children,
  className = '',
  variant = 'default',
  as: Component = 'section',
}) => {
  const baseClasses = 'border-y-2 border-nu-blue px-4 py-6 sm:px-6 sm:py-8 lg:px-8';
  const variants = {
    default: 'bg-white',
    muted: 'bg-zinc-50',
    dark: 'bg-nu-blue text-white',
  };

  const classes = [
    baseClasses,
    variants[variant] || variants.default,
    className
  ].join(' ').trim();

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
};

export default Section;
