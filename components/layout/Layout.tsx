import Head from "next/head";
import FooterComponent from "../footer";

import HeaderComponent from "../header";
export default function Layout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      
          <>
<Head>
  <title>Kiddos App</title>
  <meta name='description' content='This is a desription for Kiddos'></meta>
</Head>
          <main>
        {children}

      </main></>
            
       
    );
  }