import { Inter, Montserrat } from "next/font/google";
import './../style/style.scss'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const main = Inter({ 
  subsets: ["latin"],
  variable: '--main-font',
  display: 'swap',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat-font',
  display: 'swap'
})

export const metadata = {
  title: "Create Next App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${main.variable} ${montserrat.variable}`}>

        <Header />

        <div className="main_wrapper">
          {children}
        </div>

        <Footer />

      </body>
    </html>
  );
}
