import React from 'react';
import wallet from '../../images/products/bitcoin.jpg';

function BitCoin() {
  const adress = 'bc1qrfmc8zcdyhh4mxsgssf637g2w0hgy79wwvjacr';

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(adress)
      .then(() => {
        alert('Adress copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  };
  return (
    <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <a href="#">
        <div className="px-4 py-3 w-72">
          <span className="text-gray-400 mr-3 uppercase text-xs">Bitcoin</span>
          <img
            src={wallet}
            alt="Product"
            className="h-auto w-auto object-cover rounded-t-xl"
          />
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="text-lg font-semibold break-all text-black cursor-auto my-2 text-red ">
                Bitcoin address for payment:
                <br />
                <span className="text-red-500">{adress}</span>
              </p>
            </div>
          </div>
          <button
            onClick={copyToClipboard}
            className="inline-flex items-center justify-center gap-2.5 rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Copy Adress
          </button>
        </div>
      </a>
    </div>
  );
}

export default BitCoin;
