import { useWallet } from "@solana/wallet-adapter-react";
import React, {useState, useEffect} from "react";

function InitialForm() {

  const { publicKey } = useWallet();
  const [firstNameInput, setFirstNameInput] = useState('')
  const [lastNameInput, setLastNameInput] = useState('')
  const [walletPublicKey, setWalletPublicKey] = useState('')



  useEffect(() => {
    setWalletPublicKey(publicKey.toString())
  }, [])

  const handleFirstNameChange = (e) => {
    setFirstNameInput(e.target.value)
  }

  const handleLastNameChange = (e) => {
    setLastNameInput(e.target.value)
  }


  
  const handleSubmit = (e) => {

    console.log(firstNameInput, lastNameInput, walletPublicKey)
    
  }

  
  return (
    <>
      <div className="flex min-h-full overflow-hidden pt-16 sm:pt-0 sm:pb-10">
        <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
          <div className="relative mt-12 sm:mt-16">
            <h1 className="text-center text-2xl font-medium tracking-tight dark:text-gray-50 text-gray-900">
              Initialize Your Account
            </h1>
            <p className="mt-3 text-center text-lg dark:text-gray-200 text-gray-600">
              This is an one-time initialization to create your Solana account.
            </p>
          </div>
          <div className="-mx-4 mt-10 flex-auto bg-white py-10 px-4 shadow-xl  dark:bg-gray-900 dark:shadow-gray-800/80 rounded-2xl sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-20">
            <form 
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 dark:text-[#c2f0c2] text-xs font-bold mb-2">
                    First Name
                  </label>
                  <input
                    className="appearance-none block w-full dark:bg-gray-800 shadow-lg text-gray-700 bg-gray-200 dark:text-gray-200 border dark:border-gray-800 border-gray-200 rounded-lg py-2 px-3 leading-tight focus:outline-none dark:focus:border-gray-500"
                    id="grid-first-name"
                    type="text"
                    placeholder="John"
                    value={firstNameInput}
                    onChange={handleFirstNameChange}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 dark:text-[#c2f0c2] text-xs font-bold mb-2">
                    Last Name
                  </label>
                  <input
                    className="appearance-none block w-full dark:bg-gray-800 shadow-lg text-gray-700 bg-gray-200 dark:text-gray-200 border dark:border-gray-800 border-gray-200 rounded-lg py-2 px-3 leading-tight focus:outline-none dark:focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Doe"
                    value={lastNameInput}
                    onChange={handleLastNameChange}
                  />
                </div>
                <p className="text-sm caption text-gray-400 pl-3 pt-5">
                  ⓘ {"     "}Keep in mind that the information your enter in
                  these fields will remain{" "} 
                  <strong className="font-bold dark:text-white text-gray-600">permenant</strong>
                   {" "}and be used to identify you.
                </p>
              </div>
              <button type='submit' className="btn-color w-full dark:text-gray-400">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default InitialForm;
