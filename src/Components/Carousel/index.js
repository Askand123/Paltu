import React, {useState} from 'react';
import { CarouselData } from './CarouselData';
import styles from "./Carousel.module.css";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Carousel = ( {slides} ) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const NextSlide = () =>{
    setCurrent (current === length - 1 ? 0 : current + 1)
  }
  const PreviousSlide = () =>{
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  if(!Array.isArray(slides) || slides.length <= 0){
    return null
  }

  return (
    <section className={styles.Slider}>
      <FaArrowAltCircleLeft className={styles.LeftArrow} id={styles.slidericon} onClick={PreviousSlide} />
      <FaArrowAltCircleRight className={styles.RightArrow} id={styles.slidericon} onClick={NextSlide} />
      {CarouselData.map((slide, index) =>{
          return(
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {index === current && (
              <img src={slide.image} alt="Poster" className={styles.img}/>
              )}
              
            </div>
          ) 
      })}
    </section>
  );
};
export default Carousel