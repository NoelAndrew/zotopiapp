import { AppProps } from 'next/app';
import '@/styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.css'
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
