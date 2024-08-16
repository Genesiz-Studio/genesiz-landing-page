import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { PropsWithChildren } from "react";

const DefautLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};

export default DefautLayout;
