import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
    </div>
  );
};

export default Home;
