import React from "react";
import { BaseStyleStyles } from "./BaseLayoutStyles";
import Header from "./Header";
import Footer from "./Footer";

function Baselayout({ children, showNoMedia }) {
  return (
    <BaseStyleStyles>
      <Header />
      <body>{children}</body>
      <Footer showNoMedia={showNoMedia} />
    </BaseStyleStyles>
  );
}

export default Baselayout;
