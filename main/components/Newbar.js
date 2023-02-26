import { useWallet } from "@solana/wallet-adapter-react";
import { PhantomWalletName } from "@solana/wallet-adapter-wallets";
import React, { useEffect, useState } from "react";

function Newbar() {

    const [mounted, setMounted] = useState(false);

        // useEffect only runs on the client, so now we can safely show the UI
        useEffect(() => {
            setMounted(true);
        }, []);

        if (!mounted) {
            return null;
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
    <nav>
        <div className=" dark:bg-gray-900 dark:text-white mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <a aria-label="Home" href="#" className="flex items-center">
              <img
                src="/logo.png"
                alt="logo"
                className="shadow-xl mx-auto h-10 w-auto"
              />
              <div className="pl-3 text-lg">SendTX</div>
            </a>

            <div className="hidden lg:flex lg:gap-10">
              <a className="btn-styling " href="/features" >
                <div className="relative z-10 " disabled>Features</div>
              </a>
              <a className="btn-styling " href="/features" >
                <div className="relative z-10 " disabled>Pricing</div>
              </a>
              <a className="btn-styling " href="/features" >
                <div className="relative z-10 " disabled>Developers</div>
              </a>
              <a className="btn-styling " href="/features" >
                <div className="relative z-10  " disabled>FAQs</div>
              </a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={onClick} className="btn-color">
              {" "}
              Connect Wallet{" "}
            </button>
          </div>
        </div>
      </nav>
  )
}

export default Newbar