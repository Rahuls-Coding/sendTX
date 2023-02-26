import { useWallet } from "@solana/wallet-adapter-react";
import {useState, useEffect} from "react";

// import Router from "next/router";
import Hero from "../components/Hero";
import Newbar from '../components/Newbar'
import InitialForm from "../components/InitialForm";
import Meta from "../components/Meta";
import Navbar from "../components/Navbar";
import { useTheme } from 'next-themes'


export default function Home() {
  const { connected } = useWallet();
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
    setTheme('light')
    console.log(theme, 'theme currently')
  }, [])

  if (!mounted) {
    return null
  }

  // console.log("is connected?", connected);

  const beforeWalletIsConnected = () => {
    return (
      <div className='flex h-full flex-col'>
        <Meta title="Secured, Decentralized, Reliable Social Payments" />
        <Newbar />
        <Hero />
      </div>
    );
  };
  const afterWalletIsConnected = () => {
    return (
      <>
        <Meta title="Initialization" />
        <Navbar />
        <InitialForm />
      </>
    );
  };
  return (
    <div className="bg-white dark:text-white dark:bg-gray-900 min-h-screen">
      {!connected ? beforeWalletIsConnected() : afterWalletIsConnected()}
    </div>
  );
}