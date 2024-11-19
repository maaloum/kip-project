import React from 'react';

function CfGallery() {
  return (
    <section className="md:font-bold text-zinc-950 bg-white p-10">
      <div className="flex p-2 ">
        <img
          className=" md-w-50 h-30 px-2 mr-12"
          src="https://picsum.photos/200/300"
          alt="Gallery Image"
        />
        <div className=" md:graw">
          <p className="text-center">
            {' '}
            1172 Fair Oaks Maal k119 FairFax, VA 22033
            <br />
            1061 Chain Bridgs Rd unit N 007, McLean, VA 22102
            <br />
            1030 Little Patuxent Pk Ste 1910, Columbia, MD 21044
            <br />
            <phone className=""> +1 (571) 775-0357</phone>
            <br />
            Contact@cfgalleryfurniture.com
            <br />
            <a className="">www.cfgalleryfurniture.com</a>
            <h1 className=" font-black md:text-3xl pt-3 tracking-wide underline underline-offset-8">
              SALES ORDER
            </h1>
          </p>
        </div>
      </div>
      <div className="flex justify-between m-2 gap-6 ">
        <div className="  md:mt-5 md:w-1/2">
          Sold To : ______________________________
          <div>
            ___________________________________
            ___________________________________
            ______________________________________
          </div>
        </div>
        <div className=" flex-col justify-center md:w-3/2 ">
          <div className="flex">
            <p className="indent-24 ">Date :</p>
            <p>_______________________________________</p>
          </div>
          <div className="flex-col justify-between">
            <p className="md:ps-2">
              Ship To: _______________________________________________
            </p>
            <div className="ps-2">
              _______________________________________________________
              _______________________________________________________
              _______________________________________________________
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between ps-2">
        <p cla>Home Phone : __________________________</p>
        <p className="me-24 ">Cell Phone : __________________________</p>
      </div>
      <table class=" mt-3 border-collapse border border-400 w-full">
        <thead>
          <tr className="p-2 mx-20">
            <th className="p-2 m-2 border-collapse border border-slate-400">
              Sales Person
            </th>
            <th className="p-2 m-2 border-collapse border border-slate-400">
              Estimated time for Delivery
            </th>
            <th className="p-2 ms-2">How did you hear about us?</th>
          </tr>
        </thead>
        <tbody className="border-collapse border border-slate-400">
          <tr className="border-collapse border border-slate-400">
            <td className="border-collapse border border-slate-400">*</td>
            <td className="border-collapse border border-slate-400"></td>
            <td></td>
          </tr>
          <tr className="border-collapse border border-slate-400 uppercase text-center">
            <td className=" border-collapse border border-slate-400"> QTY.</td>
            <td className="border-collapse border border-slate-400">
              Description
            </td>
            <td className="border-collapse border border-slate-400">
              Unit price
            </td>
            <td className="border-collapse border border-slate-400">Total</td>
          </tr>
          <tr className="border-collapse border border-slate-400">
            <td className="border-collapse border border-slate-400"> _</td>
            <td className="border-collapse border border-slate-400"></td>
            <td className="border-collapse border border-slate-400"></td>
          </tr>
          <tr className="border-collapse border border-slate-400">
            <td className="border-collapse border border-slate-400"> _</td>
            <td className="border-collapse border border-slate-400"></td>
            <td className="border-collapse border border-slate-400"></td>
          </tr>
          <tr className="border-collapse border border-slate-400">
            <td className="border-collapse border border-slate-400"> _</td>
            <td className="border-collapse border border-slate-400"></td>
            <td className="border-collapse border border-slate-400"></td>
          </tr>
          <tr className="border-collapse border border-slate-400">
            <td className="border-collapse border border-slate-400"> _</td>
            <td className="border-collapse border border-slate-400"></td>
            <td className="border-collapse border border-slate-400"></td>
          </tr>
          <tr className="border-collapse border border-slate-400">
            <td className="border-collapse border border-slate-400"> _</td>
            <td className="border-collapse border border-slate-400"></td>
            <td className="border-collapse border border-slate-400"></td>
          </tr>
          <tr className="border-collapse border border-slate-400">
            <td className="border-collapse border border-slate-400"> _</td>
            <td className="border-collapse border border-slate-400"></td>
            <td className="border-collapse border border-slate-400"></td>
          </tr>
          <tr className="border-collapse border border-slate-400">
            <td className="border-collapse border border-slate-400"> _</td>
            <td className="border-collapse border border-slate-400"></td>
            <td className="border-collapse border border-slate-400"></td>
          </tr>
          <tr className="border-collapse border border-slate-400">
            <td className="border-collapse border border-slate-400"> _</td>
            <td className="border-collapse border border-slate-400"></td>
            <td className="border-collapse border border-slate-400"></td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between gap-8 w-full">
        <div className="mt-40 w-1/2 ">
          <p className="font-light mb-10">
            {' '}
            I have read and I agree to the listed on the back of this Sales
            Order
          </p>
          <div className="flex justify-between font-light">
            <p>Purchaser : </p>
            <p className="pe-24">Date : </p>
          </div>
          <hr className="p-2 h-full"></hr>
        </div>

        <table class=" my-0 py-0 border-collapse border border-400 w-1/2">
          <thead>
            <tr className="">
              <th className=" border-collapse border border-slate-400">
                Subtotal
              </th>
              <th className=""></th>
            </tr>
          </thead>
          <tbody className="border-collapse border border-slate-400">
            <tr className="border-collapse border border-slate-400 uppercase text-center">
              <td className=" border-collapse border border-slate-400"> tax</td>
              <td className="border-collapse border border-slate-400"></td>
            </tr>
            <tr className="border-collapse border border-slate-400">
              <td className="border-collapse border border-slate-400">
                {' '}
                Total
              </td>
              <td className="border-collapse border border-slate-400">
                ___________
              </td>
            </tr>
            <tr className="border-collapse border border-slate-400">
              <td className="border-collapse border border-slate-400 p-2">
                <input type="checkbox" className="p-2 " /> Pick-up
                <input type="checkbox" className="ms-2 " /> Delivery
              </td>
              <td className="border-collapse border border-slate-400"></td>
            </tr>
            <tr className="border-collapse border border-slate-400">
              <td className="border-collapse border border-slate-400 p-2">
                Total
              </td>
              <td className="border-collapse border border-slate-400"></td>
            </tr>
            <tr className="border-collapse border border-slate-400">
              <td className="border-collapse border border-slate-400 p-2">
                Deposit
              </td>
              <td className="border-collapse border border-slate-400"></td>
            </tr>
            <tr className="border-collapse border border-slate-400">
              <td className="border-collapse border border-slate-400 p-2">
                <input type="checkbox" className="p-2 " /> Cash
                <input type="checkbox" className="ms-2 " /> Charge
                <input type="checkbox" className="ms-2 " /> Check #
              </td>
              <td className="border-collapse border border-slate-400"></td>
            </tr>
            <tr className="border-collapse border border-slate-400">
              <td className="border-collapse border border-slate-400 p-2">
                Blance Due
              </td>
              <td className="border-collapse border border-slate-400"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default CfGallery;
