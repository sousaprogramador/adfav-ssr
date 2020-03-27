import React from "react";
import Head from "next/head"

const HeadComponent = ({ titleHead }) => (
  <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <title>{titleHead}</title>
  </Head>
);

export default HeadComponent;
