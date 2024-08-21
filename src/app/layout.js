import { Montserrat, Exo_2 } from "next/font/google";
import './../style/style.scss'
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Api from "@/utils/Api";
import Menu from "@/components/menu/Menu";
import Head from "next/head";


const main = Exo_2({ 
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
      <html lang="ru" className={`${montserrat.variable} ${main.variable}`} style={{parametrs}} >
        {/* <Head>
          <link rel="icon" href="/favicon.ico"/>
        </Head> */}
        <body>

          <Header info={info}/>

          <div className="main_wrapper">
            {children}
          </div>

          <Footer info={info}/>

          <Menu />

          <script src={`${Api.url}/script/pb.js`}></script>
          
        </body>
      </html>
  );
}
