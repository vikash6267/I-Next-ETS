import React, { useRef, useEffect } from "react";
import { card } from "./cardData";
import { Link } from "react-router-dom";
import { MdDoubleArrow } from "react-icons/md";

const Card = ({ title, desc }) => {
  return (
    <div className=" hoverImg flex flex-col gap-4 p-10  w-[420px] h-[400%]">
      <span className="text-2xl font-bold lg:flex lg:flex-wrap">{title}</span>
      <p className="text-xl">{desc}</p>
      <Link className="flex items-center gap-2 btn">
        View More{" "}
        <span className="flex items-center mt-1 hover:border-2 w-7 h-7 justify-center rounded-full">
          <MdDoubleArrow />
        </span>
      </Link>
    </div>
  );
};

const InfiniteScroll = ({ cards }) => {
  const containerRef = useRef(null);
  const clonedCards = [...cards, ...cards]; // Clone the cards array and append it to itself

  useEffect(() => {
    const container = containerRef.current;
    let scrollInterval;
    let scrollPosition = 0;
    const scrollStep = 2; // Adjust scrolling speed as needed

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        scrollPosition += scrollStep;
        container.scrollLeft = scrollPosition;

        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }
      }, 50); // Adjust scrolling interval as needed
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    container.addEventListener("mouseenter", stopScrolling);
    container.addEventListener("mouseleave", startScrolling);

    startScrolling();

    return () => {
      container.removeEventListener("mouseenter", stopScrolling);
      container.removeEventListener("mouseleave", startScrolling);
      stopScrolling();
    };
  }, []);

  return (
    <div className="overflow-x-hidden" style={{ position: "relative" }}>
      <div
        className="flex"
        ref={containerRef}
        style={{
          overflowX: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {clonedCards.map((currElem, index) => (
          <div
            className="hoverImg flex flex-col border-2 w-[420px] h-[400px] "
            key={index}
          >
            <Card {...currElem} />
          </div>
        ))}
      </div>
    </div>
  );
};

const IndustryExpertise = () => {
  return (
    <div className=" mt-36 flex flex-col gap-8">
      <span className="text-3xl font-bold">Industry Expertise</span>
      <p>
        Putting forth our more than 14 years of expertise to transform
        businesses digitally regardless of the industry. We believe your unique
        perspective will be an add-on to our valuable industry insights
        delivering beneficial solutions.
      </p>
      <InfiniteScroll cards={card} />
    </div>
  );
};

export default IndustryExpertise;
