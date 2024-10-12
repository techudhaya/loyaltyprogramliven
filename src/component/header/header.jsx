import React from 'react';

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-white border sticky top-0" role="banner">
      <div className="flex items-center">
        <img 
          src="https://grow.liven.love/hs-fs/hubfs/Liven%20Logo1%20(1).png?width=250&height=110&name=Liven%20Logo1%20(1).png" 
          alt="Liven Logo" 
          className="h-10 w-20"  
          onClick={() => window.location.href = 'https://liven.love/'} 
          role="button" 
          aria-label="Navigate to Liven homepage"
        />
      </div>
      <div>
        <button 
          className="bg-[#f83b6e] rounded-2xl text-white px-4 py-2" 
          onClick={() => window.location.href = 'https://app.liven.com.au/'} 
          aria-label="Download the Liven app"
        >
          Get app
        </button>
      </div>
    </header>
  );
};

export default Header;

