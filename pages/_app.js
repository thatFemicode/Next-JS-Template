import GlobalStyle from "../Styling/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../Styling/theme";
import Footer from "@/layout/Footer/Footer";
import Navbar from "@/layout/Navbar/Navbar";
import CustomCursor from "@/layout/CustomCursor/CustomCursor";
import Head from "next/head";
import Laying from "@/layout/Laying/Laying";
import React, { useRef } from "react";
import { MainStyled } from "Styling/MainStyled";

function MyApp({ Component, pageProps, router }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <MainStyled>
      <Head>
        <title>Oluwafemi</title>
        <meta name="description" content="Awesome YouTube channel" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CustomCursor />
        <Laying>
          <Component {...pageProps} />
        </Laying>
      </ThemeProvider>
    </MainStyled>
  );
}

export default MyApp;
