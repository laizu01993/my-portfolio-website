import { FaGithub, FaLinkedin } from "react-icons/fa";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import ScrollToTop from "./ScrollToTop";
import Skills from "./Skills";
import { FiDownload } from "react-icons/fi";

// const Home = () => {
//   return (
//     <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
//       <Hero></Hero>

//       {/* Download Resume Button */}
//       <div className="flex justify-center my-12 mb-6">
//         <a
//           href="/resume.pdf"
//           download
//           className="px-6 py-3 text-2xl font-semibold bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 hover:scale-105 transform transition duration-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 flex items-center gap-2"
//         >
//           <FiDownload></FiDownload>Download Resume
//         </a>
//       </div>
//       <div className="flex text-center justify-center mb-14 gap-6 text-4xl">
//         <div className="">
//           <a href="https://github.com/laizu01993" target="_blank" rel="noopener noreferrer">
//             <FaGithub className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-300" />
//           </a>
//         </div>
//         <div>
//           <a href="https://linkedin.com/in/shahanara" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="hover:text-blue-700 transition-colors duration-300" />
//           </a>
//         </div>
//       </div>

//       <AboutMe></AboutMe>
//       <Skills></Skills>
//       <Projects></Projects>
//       <Contact></Contact>
//       <ScrollToTop></ScrollToTop>
//     </div>
//   );
// };

// export default Home;

const Home = () => {

  const handleResumeDownload = () => {

    // Trigger download
    const link = document.createElement("a");
    link.href = "/Shahanara_Aktar_Resume.pdf";
    link.download = "Shahanara_Aktar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <Hero />

      {/* Download Resume Button */}
      <div className="flex justify-center my-12 mb-6">
        <button
          onClick={handleResumeDownload}
          className="px-6 py-3 text-2xl font-semibold bg-indigo-500 text-white rounded-lg shadow-md 
          hover:bg-indigo-600 hover:scale-105 transform transition duration-300 
          dark:bg-indigo-600 dark:hover:bg-indigo-700 flex items-center gap-2"
        >
          <FiDownload />
          Download Resume
        </button>
      </div>

      {/* Social Links */}
      <div className="flex justify-center mb-14 gap-6 text-4xl">
        <a
          href="https://github.com/laizu01993"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-300" />
        </a>

        <a
          href="https://linkedin.com/in/shahanara"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-blue-700 transition-colors duration-300" />
        </a>
      </div>

      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Home;

