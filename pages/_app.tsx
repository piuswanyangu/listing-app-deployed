import type { AppProps } from "next/app";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
import "../styles/globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="app-container">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
