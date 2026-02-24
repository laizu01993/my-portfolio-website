import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiExpress,
  SiJsonwebtokens,
  SiHtml5,
  SiCss3,
} from "react-icons/si";

// Skills categorized with proficiency (0-100)
const skillsData = {
  Frontend: [
    { name: "HTML5", icon: <SiHtml5 />, color: "from-orange-400 to-red-500", level: 95 },
    { name: "CSS3", icon: <SiCss3 />, color: "from-blue-400 to-purple-500", level: 90 },
    { name: "JavaScript", icon: <SiJavascript />, color: "from-yellow-400 to-yellow-500", level: 85 },
    { name: "React.js", icon: <FaReact />, color: "from-cyan-400 to-cyan-500", level: 90 },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-sky-400 to-blue-500", level: 85 },
  ],
  Backend: [
    { name: "Node.js", icon: <FaNodeJs />, color: "from-green-400 to-green-600", level: 80 },
    { name: "Express.js", icon: <SiExpress />, color: "from-gray-400 to-gray-700", level: 80 },
    { name: "MongoDB", icon: <SiMongodb />, color: "from-green-500 to-green-700", level: 75 },
  ],
  Tools: [
    { name: "Git & GitHub", icon: <FaGitAlt />, color: "from-red-400 to-red-600", level: 90 },
    { name: "Firebase", icon: <SiFirebase />, color: "from-orange-400 to-orange-600", level: 80 },
  ],
  Authentication: [
    { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "from-purple-400 to-purple-600", level: 80 },
  ],
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section
      id="skills"
      className="py-24 bg-linear-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-800 dark:text-gray-300"
        >
          Skills & <span className="text-indigo-500">Expertise</span>
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300
              ${activeTab === tab
                ? "bg-indigo-500 text-white shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-indigo-300 dark:hover:bg-indigo-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skillsData[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 flex flex-col items-center shadow-md dark:shadow-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Skill Icon */}
              <div
                className={`w-16 h-16 mb-4 rounded-full bg-linear-to-br ${skill.color} flex items-center justify-center text-3xl text-white shadow-md`}
              >
                {skill.icon}
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                {skill.name}
              </h3>

              {/* Animated Proficiency Bar */}
              <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 }}
                  className="h-3 rounded-full bg-pink-500"
                ></motion.div>
              </div>
              <span className="text-sm mt-1 text-gray-600 dark:text-gray-300">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
