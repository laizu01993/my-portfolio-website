// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import AboutMe from "./AboutMe";
// import Contact from "./Contact";
// import Hero from "./Hero";
// import Projects from "./Projects";
// import ScrollToTop from "./ScrollToTop";
// import Skills from "./Skills";
// import { FiDownload } from "react-icons/fi";
// import { motion } from "framer-motion";


// const Home = () => {

//   const handleResumeDownload = () => {

//     // Trigger download
//     const link = document.createElement("a");
//     link.href = "/Shahanara_Aktar_Resume.pdf";
//     link.download = "Shahanara_Aktar_Resume.pdf";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     // <div className="bg-white dark:bg-gray-900 transition-colors duration-300">
//     //   <Hero />

//     //   Download Resume Button
//     //   <div className="flex justify-center my-12 mb-6">
//     //     <button
//     //       onClick={handleResumeDownload}
//     //       className="px-6 py-3 text-2xl font-semibold bg-indigo-500 text-white rounded-lg shadow-md 
//     //       hover:bg-indigo-600 hover:scale-105 transform transition duration-300 
//     //       dark:bg-indigo-600 dark:hover:bg-indigo-700 flex items-center gap-2"
//     //     >
//     //       <FiDownload />
//     //       Download Resume
//     //     </button>
//     //   </div>

//     //   {/* Social Links */}
//     //   <div className="flex justify-center mb-14 gap-6 text-4xl">
//     //     <a
//     //       href="https://github.com/laizu01993"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <FaGithub className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors duration-300" />
//     //     </a>

//     //     <a
//     //       href="https://linkedin.com/in/shahanara"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       <FaLinkedin className="hover:text-blue-700 transition-colors duration-300" />
//     //     </a>
//     //   </div>

//     //   <AboutMe />
//     //   <Skills />
//     //   <Projects />
//     //   <Contact />
//     //   <ScrollToTop />
//     // </div>
//     <div id="home" className="bg-white dark:bg-gray-900 transition-colors duration-300">
//       {/* Hero Section */}
//       <Hero />

//       {/* Download Resume & Social Links */}
//       <div className="flex flex-col items-center gap-8  mb-16">
//         {/* Download Resume Button */}
//         <motion.button
//           onClick={handleResumeDownload}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="
//             flex items-center gap-3 px-8 py-4
//             bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
//             text-white text-xl md:text-2xl font-semibold
//             rounded-full shadow-lg
//             hover:shadow-2xl
//             transform transition duration-300
//             focus:outline-none focus:ring-4 focus:ring-indigo-300
//             dark:focus:ring-indigo-600
//           "
//         >
//           <FiDownload className="text-2xl md:text-3xl animate-bounce" />
//           Download Resume
//         </motion.button>

//         {/* Social Links */}
//         <div className="flex gap-8 text-4xl md:text-5xl mt-4">
//           <a
//             href="https://github.com/laizu01993"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 transform hover:-translate-y-1"
//           >
//             <FaGithub />
//           </a>
//           <a
//             href="https://linkedin.com/in/shahanara"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 transform hover:-translate-y-1"
//           >
//             <FaLinkedin />
//           </a>
//         </div>
//       </div>

//       {/* Other Sections */}
//       <AboutMe />
//       <Skills />
//       <Projects />
//       <Contact />
//       <ScrollToTop />
//     </div>
//   );
// };

// export default Home;

// Home.jsx
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import ScrollToTop from "./ScrollToTop";
import Skills from "./Skills";

const Home = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Shahanara_Aktar_Resume_2026.pdf";
    link.download = "Shahanara_Aktar_Resume_2026.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 relative">

      {/* Floating Social Icons (Desktop/Tablet) */}
      <div className="hidden md:flex fixed left-6 top-1/3 flex-col gap-6 z-50 text-gray-800 dark:text-gray-300">
        <motion.a
          href="https://github.com/laizu01993"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#000" }}
          className="transition-colors"
        >
          <FaGithub size={24} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/shahanara-aktar-8098853b1/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#0A66C2" }}
          className="transition-colors"
        >
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a
          href="mailto:laizuaktar6@gmail.com"
          whileHover={{ scale: 1.2, color: "#D44638" }}
          className="transition-colors"
        >
          <FaEnvelope size={24} />
        </motion.a>
        <motion.a
          href="tel:+8801993795774"
          whileHover={{ scale: 1.2, color: "#22C55E" }}
          className="transition-colors"
        >
          <FaPhone size={24} />
        </motion.a>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Download Resume & Social Links */}
      <div className="flex flex-col items-center gap-6 md:gap-8 mb-16 ">
        {/* Download Resume Button */}
        <motion.button
          onClick={handleResumeDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            flex items-center gap-3 px-8 py-4
            bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500
            text-white text-xl md:text-2xl font-semibold
            rounded-full shadow-lg
            hover:shadow-2xl
            transform transition duration-300
            focus:outline-none focus:ring-4 focus:ring-indigo-300
            dark:focus:ring-indigo-600
          "
        >
          <FiDownload className="text-2xl md:text-3xl animate-bounce" />
          Download Resume
        </motion.button>

        {/* Horizontal Social Icons for Mobile & Desktop under Resume */}
        <div className="flex gap-8 text-2xl md:text-4xl mt-4 md:hidden">
          <motion.a
            href="https://github.com/laizu01993"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#000" }}
            className="transition-colors"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/shahanara"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: "#0A66C2" }}
            className="transition-colors"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:laizuaktar6@gmail.com"
            whileHover={{ scale: 1.2, color: "#D44638" }}
            className="transition-colors"
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="tel:+8801993795774"
            whileHover={{ scale: 1.2, color: "#22C55E" }}
            className="transition-colors"
          >
            <FaPhone />
          </motion.a>
        </div>
      </div>

      {/* Other Sections */}
      <AboutMe />
      <Skills />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

export default Home;