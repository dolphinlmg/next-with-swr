import '@/styles/globals.css';
import axios from 'axios';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';

export default function App({ Component, pageProps }: AppProps) {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
