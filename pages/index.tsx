import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FinalCTA from "../components/FinalCTA";
import Grain from "../components/Grain";
import Header from "../components/Header";
import Loader from "../components/Loader";
import Parallax from "../components/Parallax";
import SmoothScroll from "../components/SmoothScroll";
import Menu from "../components/three/Menu";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Ringr. - Unleash new possibilities</title>
        <meta
          property="og:title"
          content="The Ringr. - Unleash new possibilities"
        />
        <meta property="og:site_name" content="The Ringr" />
        <meta
          property="og:description"
          content="The Ringr is the perfect way to keep your life in order and under your control. With a sleek and sophisticated touch screen, the Ringr is perfect for those who want to be able to access their life with a simple touch."
        />
        <meta property="og:type" content="product" />
        <meta property="og:image" content="/og.png"></meta>
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta
          name="description"
          content="The Ringr is the perfect way to keep your life in order and under your control. With a sleek and sophisticated touch screen, the Ringr is perfect for those who want to be able to access their life with a simple touch."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu></Menu>
      <FinalCTA></FinalCTA>
      <Loader></Loader>
      <SmoothScroll>
        <section className="land">
          <div className="land__title">
            <p>OPTO</p>
            <h1>Ringr.</h1>
          </div>
        </section>
        <section>
          <p className="block">
            The Ringr is the perfect way to keep your life in order and under
            your control.
            <br />
            <br />
            With a sleek and sophisticated touch screen, the Ringr is perfect
            for those who want to be able to access their life with a simple
            touch.
          </p>
        </section>
        <section>
          <p className="block">
            The Ringr also features haptics, which provide you with feedback
            whenever you interact with the ring.
            <br />
            <br />
            Whether you&apos;re touching the screen or using gestures, the
            haptics will ensure that you always know what&apos;s going on.
          </p>
        </section>
        <section>
          <p className="block">
            Ringr lets you create custom gestures or use the prebuilt ones.{" "}
            <br />
            <br />
            With this feature, you can control your smart ring with a flick of
            your wrist.
          </p>
        </section>
        <section>
          <p className="block">
            The Ringr also supports NFC, meaning that you can use it to make
            payments without ever having to take your phone out of your pocket.
            <br />
            <br />
            Whether you&apos;re buying a coffee or paying for a taxi, the Ringr
            is the smartest way to pay.
          </p>
        </section>
        <section>
          <div className="footer">Made by Viktor Stopka</div>
        </section>
      </SmoothScroll>
    </div>
  );
};

export default Home;
