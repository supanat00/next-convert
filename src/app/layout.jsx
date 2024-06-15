import { Inter } from "next/font/google";
import "./globals.css";
import "./assets/css/styles.css"
import "./assets/css/swiper-bundle.min.css"

// import "./libs/main.js"
// import './libs/scrollreveal.min.js'
// import './libs/swiper-bundle.min.js'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Responsive Halloween Website",
  description: "Responsive Halloween Website",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <a href="#" class="scrollup" id="scroll-up">
        <i class='bx bx-up-arrow-alt scrollup__icon'></i>
      </a>
    </html>
  );
}
