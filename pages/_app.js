import GlobalStyle from "../styles";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  // BrugerMenu
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleClose = () => {
    setIsOpen(false);
  };

  // Pagination
  const [pageNumber, setPageNumber] = useState(1);

  const handleNext = () => {
    setPageNumber((PageNumber) => PageNumber + 1);
  };
  const handlePrev = () => {
    setPageNumber(Math.max(1, pageNumber - 1));
  };

  return (
    <>
      <Header isOpen={isOpen} onToggle={handleToggle} />
      <Layout>
        <GlobalStyle />
        <Component
          {...pageProps}
          pageNumber={pageNumber}
          handlePrev={handlePrev}
          handleNext={handleNext}
        />
      </Layout>
    </>
  );
}
