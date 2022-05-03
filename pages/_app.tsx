import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { App } from "../src/components/App";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} >
      <App>
        <Component {...pageProps} />
      </App>
    </SessionProvider>
  );
}

export default MyApp;
