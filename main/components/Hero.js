import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
import React, { useEffect, useState } from "react";

function Hero() {
  const { select } = useWallet();

  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const renderCorrectImage = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      console.log("dark mode?")
      return(
        <img
                  src="/darkproto.png"
                  alt="hero"
                  className="relative mx-auto max-w-[400px]"
        />

      )
  } else {
    console.log("light mode?")
    return(
      <img
                  src="/lightproto.png"
                  alt="hero"
                  className="relative  mx-auto max-w-[400px]"
        />
    )
  }
  }
  
  const onClick = () => {
    try {
      const {solana} = window;
      if (solana && solana.isPhantom) {
        select(PhantomWalletName);
      } else {
        alert("Phantom is not installed on broswer! Try installing at Phantom.app");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className=" dark:bg-gray-900 dark:text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
            <div className="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
              <h1 className="text-4xl font-medium tracking-tight dark:text-white text-gray-900">
                Transactions with Freedom and Security
              </h1>
              <p className="mt-6 text-lg text-gray-600 dark:text-white">
                By sending payments through the solana network, your personal
                information won&#39;t be visible, sold, or stolen. Including,
                small transactions fees that are fractions of a penny.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                <button onClick={onClick} className="btn-color">
                  {" "}
                  Get Started{" "}
                </button>
              </div>
              <div className="text-sm caption text-gray-500 pt-10">
                ⓘ Mobile App Coming Soon!
              </div>
            </div>
            <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
              <div className="-mx-4 h-auto px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                {renderCorrectImage()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
