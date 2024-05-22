import React from "react";
import Culture from "../components/Culture";
import AboutCard from "../components/AboutCard";
import Projects from "../components/tech/Projects";
import { Link } from "react-router-dom";
import AboutHere from "../components/tech/AboutHero";
import AboutHero from "../components/tech/AboutHero";

const About = () => {
  return (
    <div className="mt-[87px] w-11/12 mx-auto">
      <br />
      <AboutHero />
      <AboutCard />
      <Culture />
      <Projects />
      <Link
        to="/prework"
        className="bg-transparent border text-black border-black px-10 py-5  text-xl rounded-md hover:bg-black hover:text-white"
      >
        View All Projects
      </Link>
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;
