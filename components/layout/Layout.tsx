export default function Layout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en">
        <body>
            Test Content
            {children}
        </body>
      </html>
    );
  }