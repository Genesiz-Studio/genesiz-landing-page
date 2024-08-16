"use client";
import DefautLayout from "@/layouts";
import Head from "next/head";
import React, { PropsWithChildren } from "react";

const ProviderApp = ({ children }: PropsWithChildren) => {
  return (
    <React.Fragment>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <DefautLayout>{children}</DefautLayout>
    </React.Fragment>
  );
};

export default ProviderApp;
