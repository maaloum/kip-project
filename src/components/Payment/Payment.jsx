import React from 'react';
import BitCoin from './BitCoin';
import USDT from './Usdt';
import { useLocation } from 'react-router-dom';

function Payment() {
  const location = useLocation();
  const { price } = location.state || {};
  console.log(price);
  return (
    <div className="flex-col content-center p-4">
      <div className="font-bold text-zinc-950 text-center mb-10">
        <h1 className="text-2xl">Cryptocurrency Payment</h1>
        {price ? <h2> Pay ${price}</h2> : <p>_____</p>}
      </div>
      <div className=" flex flex-col gap-5  items-center md:flex-row md:justify-around ">
        <BitCoin />
        <USDT />
      </div>
    </div>
  );
}

export default Payment;
