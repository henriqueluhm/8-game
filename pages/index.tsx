/* eslint-disable @next/next/no-page-custom-font */
import type { NextPage } from "next";

import Head from "next/head";
import Board from "../components/Board";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap"
          rel="stylesheet"
        ></link>
        <title>8 game</title>
      </Head>
      <div
        id="content-wrapper"
        className="flex flex-col items-center justify-center w-full h-screen max-h-screen overflow-hidden text-5xl text-game-light-blue bg-gradient-to-b from-game-dark to-game-purple"
      >
        <Board />
      </div>
    </>
  );
};

export default Home;
