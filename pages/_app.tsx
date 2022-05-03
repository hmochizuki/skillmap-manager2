import type { AppProps } from "next/app";
import { App } from "../src/components/App";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;
