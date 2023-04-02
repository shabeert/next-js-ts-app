import BodyEnd from "@/components/bodyend";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:100,200,300,400,500,600,700,800,900"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Fredericka+the+Great"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <BodyEnd></BodyEnd>
      </body>
    </Html>
  );
}
