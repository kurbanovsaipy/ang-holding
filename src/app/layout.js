import { Inter, Montserrat } from "next/font/google";
import './../style/style.scss'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Api from "@/utils/Api";

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

export default async function RootLayout({ children }) {

  const parametrs = await Api.getWithoutCache('thema/string')
  const info = await Api.getWithoutCache('contact/info')

  return (
    <html lang="ru" style={{parametrs}}>
      <body className={`${main.variable} ${montserrat.variable}`}>

        <Header info={info}/>

        <div className="main_wrapper">
          {children}
        </div>

        <Footer info={info}/>

      </body>
    </html>
  );
}
