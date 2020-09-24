import React from "react";
import { AppProps } from "next/app";
import "../css/main.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
