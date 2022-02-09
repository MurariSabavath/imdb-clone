import React from "react";
import { useParams } from "react-router-dom";
import { Navbar, Footer } from "../components";

const TvView = (props) => {
  const id = useParams();
  console.log(id);
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default TvView;

