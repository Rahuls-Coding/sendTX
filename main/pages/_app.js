import "../styles/globals.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { ThemeProvider } from 'next-themes'
import { Manrope } from '@next/font/google'


const manrope = Manrope({
  subsets: ['latin'],
});


import { useMemo } from "react";

function MyApp({ Component, pageProps }) {
  const endpoint =
    "https://frosty-hidden-gadget.solana-devnet.discover.quiknode.pro/4adc517038f95d02e4e2910de75a2597d04f3a66/";
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);
  return (
    <main className={manrope.className} >
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <ThemeProvider>
            <Component {...pageProps} />
            </ThemeProvider>
        </WalletProvider>
        </ConnectionProvider>
    </main>
  );
}

export default MyApp;
