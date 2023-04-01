import '@/styles/globals.css'
import '@/styles/open-iconic-bootstrap.min.css'
import '@/styles/animate.css'
import '@/styles/owl.carousel.min.css'
import '@/styles/owl.theme.default.min.css'
import '@/styles/magnific-popup.css'
import '@/styles/aos.css'
import '@/styles/ionicons.min.css'
import '@/styles/flaticon.css'
import '@/styles/icomoon.css'
import '@/styles/style.css'
import Layout from '@/components/layout/Layout'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
  <Component {...pageProps} />
</Layout>
}
