"use client";
import React from "react";
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

  const { selectedIndex, scrollSnaps, onDotButtonClick, setSelectedIndex } =
    useDotButton(emblaApi);

  const handleMouseEnter = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
      return;
    }
  };

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <React.Fragment>
            {slides.map((item, index) => (
              <div
                className="embla__slide"
                key={`Card-More-${index}`}
                // onMouseEnter={() => handleMouseEnter(index)}
              >
                <CardTypeOne
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              </div>
            ))}
          </React.Fragment>
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
