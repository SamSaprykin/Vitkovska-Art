import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Hero from "../components/heroSection";
import FeaturedArts from "../components/featuredArts";
import HomeServices from "../components/homeServices";
import TextScroll from "../components/textScroll";
import useLatestArts from "../hooks/useLatestArts";

const IndexPage = () => {
  const latestArts = useLatestArts();
  console.log(latestArts.edges);
  return (
    <>
      <SEO title="Home" />
      <Hero />
      <FeaturedArts arts={latestArts.edges} />
      <TextScroll />
      <HomeServices />
    </>
  );
};

export default IndexPage;
