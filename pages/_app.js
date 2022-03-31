import GlobalStyle from "../Styling/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../Styling/theme";
import Footer from "@/layout/Footer/Footer";
import Navbar from "@/layout/Navbar/Navbar";
import CustomCursor from "@/layout/CustomCursor/CustomCursor";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <>
      <Head>
        <title>Oluwafemi</title>
        <meta name="description" content="Awesome YouTube channel" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CustomCursor />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
