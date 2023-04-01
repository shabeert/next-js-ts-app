import FooterComponent from "../footer";


export default function Layout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      
          <><main>
        {children}

      </main><FooterComponent></FooterComponent></>
            
       
    );
  }