import "./globals.css";

export const metadata = {
  title: "Avalanche Truffle Box"
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
