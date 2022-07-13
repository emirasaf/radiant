import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import FirstHeading from "../components/FirstHeading";
import Header from "../components/Header";
import SecondHeading from "../components/SecondHeading";
import Etu from "../components/Etu";
import Pay from "../components/Pay";
import QR from "../components/QR";
import Send from "../components/Send";
import Card from "../components/Card";
import Cashbacks from "../components/Cashbacks";
import Subs from "../components/Subs";
import Virtual from "../components/Virtual";
import Eco from "../components/Eco";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Radiant</title>
      </Head>
      <main>
        <Header></Header>
        <FirstHeading></FirstHeading>
        <SecondHeading></SecondHeading>
        <Etu></Etu>
        <Pay></Pay>
        <QR></QR>
        <Send></Send>
        <Card></Card>
        <Cashbacks></Cashbacks>
        <Subs></Subs>
        <Eco></Eco>
        <Virtual></Virtual>
      </main>
    </>
  );
}
