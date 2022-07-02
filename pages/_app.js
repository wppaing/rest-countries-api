import CountryProvider from "../providers/CountryProvider";
import { ThemeProvider } from "styled-components";
import useDarkMode from "../hooks/useDarkMode";
import GlobalStyle from "../components/GlobalStyles";
import Layout from "../components/Layout";
import Head from "next/head";

const lightTheme = {
  primary: "#050505",
  bgPrimary: "#ffffff",
  bgSecondary: "#fafafa",
};

const darkTheme = {
  primary: "#fdfdfd",
  bgPrimary: "#2b3743",
  bgSecondary: "#202d36",
};

function MyApp({ Component, pageProps }) {
  const { theme, toggleTheme } = useDarkMode();
  const isLight = theme === "light";

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyle />
      <CountryProvider>
        <Head>
          <title>Rest Countries API</title>
        </Head>
        <Layout theme={theme} toggleTheme={toggleTheme}>
          <Component {...pageProps} />
        </Layout>
      </CountryProvider>
    </ThemeProvider>
  );
}

export default MyApp;
