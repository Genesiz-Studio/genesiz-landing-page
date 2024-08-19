"use client";
import React, { useState, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import useEmblaCarousel from "embla-carousel-react";
import CardTypeOne from "../Card";

type SlideProps = {
  title: string;
  description: string;
  image: string;
};

type PropType = {
  slides: Array<SlideProps>;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [isScrolling, setIsScrolling] = useState(false);

  const { selectedIndex, scrollSnaps, onDotButtonClick, setSelectedIndex } =
    useDotButton(emblaApi);

  const handleMouseEnter = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
      return;
    }
  };

  const handleScroll = () => {
    setIsScrolling(true);
    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {}, [emblaRef]);

  return (
    <section className="embla">
      <div
        onScroll={handleScroll}
        className={`embla__viewport ${isScrolling ? "scrolling" : ""}`}
        ref={emblaRef}
      >
        <div className="embla__container">
          {slides.map((item, index) => (
            <div
              className="embla__slide"
              key={`Card-More-${index}`}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              <CardTypeOne
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
