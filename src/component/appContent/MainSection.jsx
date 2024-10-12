import React, { useState, useMemo } from 'react';

const Toggle = ({ id, checked, onChange }) => {
  return (
    <label htmlFor={id} className="relative inline-block w-12 h-6 cursor-pointer">
      <input
        type="checkbox"
        id={id}
        className="hidden"
        checked={checked}
        onChange={onChange}
      />
      <span
        className={`block w-full h-full rounded-full transition ${
          checked ? "bg-[#f83b6e]" : "bg-gray-300"
        }`}
      ></span>
      <span className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition ${
          checked ? "translate-x-6" : ""
        }`}
      ></span>
    </label>
  );
};

const LoyaltyCard = ({ buyAmount, BonusAmount, isAppExclusive }) => {
  return (
    <div className='relative' >
      { isAppExclusive && (
        <div className='flex justify-center'>
          <span className="bg-[#f83b6e] rounded-2xl text-white absolute top-2 px-2 py-1 text-xs">App Exclusive</span>
        </div>
      )}
      <div className="flex justify-between border cursor-pointer rounded-lg p-4 m-4 w-80 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
        onClick={() => window.location.href = 'https://liven.love/'}  
        >
        <div >
          <span>buy</span> <br/> <span className="text-2xl font-bold">${buyAmount}</span>
          </div>
        <div className='flex justify-center items-center'>
          <img src='/coin.png' alt="coin" className="h-6 w-6" />
        </div>
        <div className="text-lg text-[#70b3a9]">
          <span className='text-sm'>Bonus</span> <br/> <span className="text-2xl font-bold">${BonusAmount}</span>
        </div>
      </div>

    </div>
  );
}

const MainSection = () => {

  const [purchaseAsGift, setPurchaseAsGift] = useState(false);

  const [loyaltyList] = useState([
    { buyAmount: 30, BonusAmount: 10, isAppExclusive: true },
    { buyAmount: 50, BonusAmount: 5 },
    { buyAmount: 100, BonusAmount: 15 },
    { buyAmount: 250, BonusAmount: 50 },
    { buyAmount: 500, BonusAmount: 125 },
  ]);

  let currentLoyalList = useMemo(() => {

    if (purchaseAsGift) {
      return loyaltyList.filter(loyalty => !loyalty.isAppExclusive);
    } else {
      return loyaltyList;
    }
    
  }, [purchaseAsGift, loyaltyList]);


  return (
    <>
      <div className="flex flex-col items-center justify-center m-8">
        <header className="text-4xl font-bold mb-4">
          San Dollars
        </header>
        <p className="text-lg">
          Pay now, eat more later! Earn a bonus when you buy food upfront. Tap now to purchase.
        </p>
      </div>

      <section className='flex justify-center'>
        <div className='flex border rounded-2xl p-1 bg-gray-100'>
          <span className='text-md me-5 ps-2 text-gray-500'>Purchase as gift</span>
          <Toggle 
            id="purchaseAsGiftToggle" 
            checked={purchaseAsGift} 
            onChange={() => setPurchaseAsGift(!purchaseAsGift)} 
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-8">
        {currentLoyalList.map((loyal, index) => (
          <LoyaltyCard key={index} buyAmount={loyal.buyAmount} BonusAmount={loyal.BonusAmount}  isAppExclusive={loyal.isAppExclusive} />
        ))}
      </section>


    </>
  );
};

export default MainSection;