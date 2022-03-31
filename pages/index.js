// import Head from "next/head";
// import Image from "next/image";

import { OuterLayout } from "Styling/Layout/Layout";
import { HomeStyled } from "Styling/PagesStyling/HomeStyled";

// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <HomeStyled>
      <OuterLayout>Home</OuterLayout>
    </HomeStyled>
  );
}
