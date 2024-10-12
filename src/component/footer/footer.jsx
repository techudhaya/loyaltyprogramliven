import React from 'react';

const Footer = () => {
  return (
    <footer className="flex justify-center">
      <img src="https://grow.liven.love/hs-fs/hubfs/Liven%20Logo1%20(1).png?width=250&height=110&name=Liven%20Logo1%20(1).png" 
        alt="Logo" 
        className="h-8 w-16" 
        onClick={() => window.location.href = 'https://liven.love/'} 
        aria-label="Navigate to Liven homepage"
        />
    </footer>
  );
};

export default Footer;

