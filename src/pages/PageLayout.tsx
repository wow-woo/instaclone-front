import React from "react";
import { Helmet } from "react-helmet-async";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </>
  );
};
