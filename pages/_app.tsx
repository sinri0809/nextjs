import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../src/Header'
import Footer from '../src/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Header></Header>
    <Component {...pageProps} />
    <Footer></Footer>
  </>
}
