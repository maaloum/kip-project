// import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
// import SelectGroupOne from '../../components/Forms/SelectGroup/SelectGroupOne';
import { chimeBank } from '../../constants/Bank';
import Card from '../../components/Cards/Card';

const FormLayout = () => {

  return (
    <>
      <Breadcrumb pageName="Banks" />
      <section id="Projects"
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {chimeBank.map((product, index) => (
     
           <Card product={product} index=  {index} />
        ))}
</section>

          {/* <!-- Input Fields --> */}
          {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Input Fields
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Default Input
                </label>
                <input
                  type="text"
                  placeholder="Default Input"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Active Input
                </label>
                <input
                  type="text"
                  placeholder="Active Input"
                  className="w-full rounded-lg border-[1.5px] border-primary bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:text-white"
                />
              </div>

              <div>
                <label className="mb-3 block font-medium text-black dark:text-white">
                  Disabled label
                </label>
                <input
                  type="text"
                  placeholder="Disabled label"
                  disabled
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary dark:disabled:bg-black"
                />
              </div>
            </div>
          </div>

          {/* <!-- Toggle switch input --> */}
          {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Toggle switch input
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <SwitcherOne />
              <SwitcherTwo />
              <SwitcherThree />
              <SwitcherFour />
            </div>
          </div> */}

          {/* <!-- Time and date --> */}
          {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Time and date
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <DatePickerOne />
              <DatePickerTwo />
            </div>
          </div> */}

          {/* <!-- File upload --> */}
          {/* <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                File upload
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Attach file
                </label>
                <input
                  type="file"
                  className="w-full rounded-md border border-stroke p-3 outline-none transition file:mr-4 file:rounded file:border-[0.5px] file:border-stroke file:bg-[#EEEEEE] file:py-1 file:px-2.5 file:text-sm focus:border-primary file:focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-strokedark dark:file:bg-white/30 dark:file:text-white"
                />
              </div>
            </div>
          </div>
        </div> */} 
      
     
    </>
  );
  // return (
    
  //   // <>
  //   //   <Breadcrumb pageName="Form Layout" />

  //   //   <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
  //   //     <div className="flex flex-col gap-9">
  //   //       {/* <!-- Contact Form --> */}
  //   //       <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
  //   //         <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
  //   //           <h3 className="font-medium text-black dark:text-white">
  //   //             Contact Form
  //   //           </h3>
  //   //         </div>
  //   //         <form action="#">
  //   //           <div className="p-6.5">
  //   //             <div className="mb-4.5 flex flex-col gap-6 xl:flex-row">
  //   //               <div className="w-full xl:w-1/2">
  //   //                 <label className="mb-2.5 block text-black dark:text-white">
  //   //                   First name
  //   //                 </label>
  //   //                 <input
  //   //                   type="text"
  //   //                   placeholder="Enter your first name"
  //   //                   className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  //   //                 />
  //   //               </div>

  //   //               <div className="w-full xl:w-1/2">
  //   //                 <label className="mb-2.5 block text-black dark:text-white">
  //   //                   Last name
  //   //                 </label>
  //   //                 <input
  //   //                   type="text"
  //   //                   placeholder="Enter your last name"
  //   //                   className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  //   //                 />
  //   //               </div>
  //   //             </div>

  //   //             <div className="mb-4.5">
  //   //               <label className="mb-2.5 block text-black dark:text-white">
  //   //                 Email <span className="text-meta-1">*</span>
  //   //               </label>
  //   //               <input
  //   //                 type="email"
  //   //                 placeholder="Enter your email address"
  //   //                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  //   //               />
  //   //             </div>

  //   //             <div className="mb-4.5">
  //   //               <label className="mb-2.5 block text-black dark:text-white">
  //   //                 Subject
  //   //               </label>
  //   //               <input
  //   //                 type="text"
  //   //                 placeholder="Select subject"
  //   //                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  //   //               />
  //   //             </div>

  //   //             <SelectGroupOne />

  //   //             <div className="mb-6">
  //   //               <label className="mb-2.5 block text-black dark:text-white">
  //   //                 Message
  //   //               </label>
  //   //               <textarea
  //   //                 rows={6}
  //   //                 placeholder="Type your message"
  //   //                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  //   //               ></textarea>
  //   //             </div>

  //   //             <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
  //   //               Send Message
  //   //             </button>
  //   //           </div>
  //   //         </form>
  //   //       </div>
  //   //     </div>

  //   //     <div className="flex flex-col gap-9">
  //   //       {/* <!-- Sign In Form --> */}
  //   //       <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
  //   //         <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
  //   //           <h3 className="font-medium text-black dark:text-white">
  //   //             Sign In Form
  //   //           </h3>
  //   //         </div>
  //   //         <form action="#">
  //   //           <div className="p-6.5">
  //   //             <div className="mb-4.5">
  //   //               <label className="mb-2.5 block text-black dark:text-white">
  //   //                 Email
  //   //               </label>
  //   //               <input
  //   //                 type="email"
  //   //                 placeholder="Enter your email address"
  //   //                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  //   //               />
  //   //             </div>

  //   //             <div>
  //   //               <label className="mb-2.5 block text-black dark:text-white">
  //   //                 Password
  //   //               </label>
  //   //               <input
  //   //                 type="password"
  //   //                 placeholder="Enter password"
  //   //                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  //   //               />
  //   //             </div>

  //   //             <div className="mt-5 mb-5.5 flex items-center justify-between">
  //   //               <label htmlFor="formCheckbox" className="flex cursor-pointer">
  //   //                 <div className="relative pt-0.5">
  //   //                   <input
  //   //                     type="checkbox"
  //   //                     id="formCheckbox"
  //   //                     className="taskCheckbox sr-only"
  //   //                   />
  //   //                   <div className="box mr-3 flex h-5 w-5 items-center justify-center rounded border border-stroke dark:border-strokedark">
  //   //                     <span className="text-white opacity-0">
  //   //                       <svg
  //   //                         className="fill-current"
  //   //                         width="10"
  //   //                         height="7"
  //   //                         viewBox="0 0 10 7"
  //   //                         fill="none"
  //   //                         xmlns="http://www.w3.org/2000/svg"
  //   //                       >
  //   //                         <path
  //   //                           fillRule="evenodd"
  //   //                           clipRule="evenodd"
  //   //                           d="M9.70685 0.292804C9.89455 0.480344 10 0.734667 10 0.999847C10 1.26503 9.89455 1.51935 9.70685 1.70689L4.70059 6.7072C4.51283 6.89468 4.2582 7 3.9927 7C3.72721 7 3.47258 6.89468 3.28482 6.7072L0.281063 3.70701C0.0986771 3.5184 -0.00224342 3.26578 3.785e-05 3.00357C0.00231912 2.74136 0.10762 2.49053 0.29326 2.30511C0.4789 2.11969 0.730026 2.01451 0.992551 2.01224C1.25508 2.00996 1.50799 2.11076 1.69683 2.29293L3.9927 4.58607L8.29108 0.292804C8.47884 0.105322 8.73347 0 8.99896 0C9.26446 0 9.51908 0.105322 9.70685 0.292804Z"
  //   //                           fill=""
  //   //                         />
  //   //                       </svg>
  //   //                     </span>
  //   //                   </div>
  //   //                 </div>
  //   //                 <p>Remember me</p>
  //   //               </label>

  //   //               <Link to="#" className="text-sm text-primary hover:underline">
  //   //                 Forget password?
  //   //               </Link>
  //   //             </div>

  //   //             <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
  //   //               Sign In
  //   //             </button>
  //   //           </div>
  //   //         </form>
  //   //       </div>

  //   //       {/* <!-- Sign Up Form --> */}
  //   //       <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
  //   //         <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
  //   //           <h3 className="font-medium text-black dark:text-white">
  //   //             Sign Up Form
  //   //           </h3>
  //   //         </div>
  //   //         <form action="#">
  //   //           <div className="p-6.5">
  //   //             <div className="mb-4.5">
  //   //               <label className="mb-2.5 block text-black dark:text-white">
  //   //                 Name
  //   //               </label>
  //   //               <input
  //   //                 type="text"
  //   //                 placeholder="Enter your full name"
  //   //                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  //   //               />
  //   //             </div>

  //   //             <div className="mb-4.5">
  //   //               <label className="mb-2.5 block text-black dark:text-white">
  //   //                 Email
  //   //               </label>
  //   //               <input
  //   //                 type="email"
  //   //                 placeholder="Enter your email address"
  //   //                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  //   //               />
  //   //             </div>

  //   //             <div className="mb-4.5">
  //   //               <label className="mb-2.5 block text-black dark:text-white">
  //   //                 Password
  //   //               </label>
  //   //               <input
  //   //                 type="password"
  //   //                 placeholder="Enter password"
  //   //                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  //   //               />
  //   //             </div>

  //   //             <div className="mb-5.5">
  //   //               <label className="mb-2.5 block text-black dark:text-white">
  //   //                 Re-type Password
  //   //               </label>
  //   //               <input
  //   //                 type="password"
  //   //                 placeholder="Re-enter password"
  //   //                 className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
  //   //               />
  //   //             </div>

  //   //             <button className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
  //   //               Sign Up
  //   //             </button>
  //   //           </div>
  //   //         </form>
  //   //       </div>
  //   //     </div>
  //   //   </div>
  //   // </>
  // );
};

export default FormLayout;
