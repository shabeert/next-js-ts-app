import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="/js/jquery.min.js" strategy="beforeInteractive"></Script>
        <Script src="/js/jquery-migrate-3.0.1.min.js" strategy="beforeInteractive"></Script>
        <Script src="/js/popper.min.js" strategy="lazyOnload"></Script>
        <Script src="/js/bootstrap.min.js" strategy="lazyOnload"></Script>
        <Script src="/js/jquery.easing.1.3.js" strategy="lazyOnload"></Script>
        <Script src="/js/jquery.waypoints.min.js" strategy="lazyOnload"></Script>
        <Script src="/js/jquery.stellar.min.js" strategy="lazyOnload"></Script>
        <Script src="/js/owl.carousel.min.js" strategy="lazyOnload"></Script>
        <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload"></Script>
        <Script src="/js/aos.js" strategy="lazyOnload"></Script>
        <Script src="/js/jquery.animateNumber.min.js" strategy="lazyOnload"></Script>
        <Script src="/js/scrollax.min.js" strategy="lazyOnload"></Script>        
         <Script src="/js/main.js" strategy="lazyOnload"></Script>         
      </body>
    </Html>
  );
}
