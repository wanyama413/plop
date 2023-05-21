import '@/styles/globals.scss'
import 'tailwindcss/tailwind.css'
import '../styles/main.css'
import  { AppProps } from 'next/app'
import { Layout } from '../components/index'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
