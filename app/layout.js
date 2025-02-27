import { Outfit, Ovo } from "next/font/google";
import "./globals.css";
import Head from "next/head"; 

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});



export const metadata = {
  title: "Dulshan - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth ">

      <Head>
        <title>Dulshan - Portfolio</title>
        
      </Head>


      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-4 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
