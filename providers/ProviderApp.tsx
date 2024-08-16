"use client";
import DefautLayout from "@/layouts";
import Head from "next/head";
import React, { PropsWithChildren } from "react";

const ProviderApp = ({ children }: PropsWithChildren) => {
  return (
    <React.Fragment>
      <DefautLayout>{children}</DefautLayout>
    </React.Fragment>
  );
};

export default ProviderApp;
