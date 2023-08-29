"use client";
import Head from "next/head";
import Image from "next/image";
import styles from "./page.module.css";
// import ManualHeader from "@/components/ManualHeader";
import { MoralisProvider } from "react-moralis";
import Header from "@/components/Header";
import LotteryEntrance from "@/components/LotteryEntrance";
import { NotificationProvider } from "@web3uikit/core";

export default function Home() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <div className={styles.container}>
          <Head>
            <title>Smart Contract Lottery</title>
            <meta name="description" content="Our Smart Contract Lottery" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <LotteryEntrance />
        </div>
      </NotificationProvider>
    </MoralisProvider>
  );
}
