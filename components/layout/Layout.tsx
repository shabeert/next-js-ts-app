import FooterComponent from "../footer";

import HeaderComponent from "../header";
export default function Layout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      
          <>
<HeaderComponent></HeaderComponent>
          <main>
        {children}

      </main><FooterComponent></FooterComponent></>
            
       
    );
  }