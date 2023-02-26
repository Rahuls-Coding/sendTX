import { useWallet } from "@solana/wallet-adapter-react";


export default function Navbar() {
  const { publicKey, disconnect } = useWallet();
  let publickey = publicKey.toString();
  let f3 = publickey.substring(0, 4);
  let l3 = publickey.substring(publickey.length - 4, publickey.length);
  let finalValue = f3 + "..." + l3;


  const onClick = () => {
    disconnect();
  };

  return (
    <nav>
      <div className=" dark:bg-gray-900 bg-white dark:text-white mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-50 flex justify-between py-8">
        <div className="relative z-10 flex items-center gap-16">
        <a aria-label="Home" href="#" className="">
              <img
                src="/logo.png"
                alt="logo"
                className="shadow-xl mx-auto h-10 w-auto"
              />
              <div className="pl-3 text-lg">SendTX</div>
            </a>
        </div>
        <div className="flex items-center gap-6">
          <button disabled className="btn-color">
            {" "}
            {finalValue}{" "}
          </button>
          <button className="btn-color" onClick={onClick}>
            {" "}
            Disconnect{" "}
          </button>
        </div>
      </div>
    </nav>
  );
}
