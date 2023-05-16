import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Header isOpen={isOpen} onToggle={handleToggle} />
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
