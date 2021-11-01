import React from "react";
import { CarouselData } from "../../Components/Carousel/CarouselData";
import { Carousel, Categories, Navbar } from "../../Components/index";

export default function HomeScreen() {
  return (
    <>
      <Navbar />
      <Categories />
      <Carousel slides={CarouselData}/>
    </>
  );
}
