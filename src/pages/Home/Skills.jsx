
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
} from "react-icons/si";

// Skills array with optional description
const skills = [
    { name: "React", icon: <FaReact />, color: "text-cyan-500", description: "Frontend library" },
    { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "text-yellow-500", description: "Programming language" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400", description: "UI styling framework" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", description: "Backend runtime" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-700", description: "Backend framework" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600", description: "Database" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500", description: "Authentication & Realtime DB" },
    { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "text-purple-500", description: "Secure authentication" },
    { name: "Git & GitHub", icon: <FaGitAlt />, color: "text-red-500", description: "Version control" },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 bg-linear-to-b from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800"
        >
            <div className="max-w-6xl mx-auto px-4">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-gray-300">
                        Skills & Technologies
                    </h2>
                    <p className="text-gray-950 dark:text-gray-300 max-w-xl mx-auto">
                        Technologies I use to build fast, scalable, and user-focused web applications.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            viewport={{ once: true }}
                            className="group bg-white/70 dark:bg-gray-50 backdrop-blur-md
                         border border-gray-200 dark:border-gray-700 rounded-2xl p-6 text-center shadow-sm
                         hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                        >
                            {/* Icon */}
                            <div
                                className={`text-4xl mb-4 mx-auto ${skill.color} 
                            group-hover:scale-125 group-hover:drop-shadow-lg transition-transform duration-300`}
                            >
                                {skill.icon}
                            </div>

                            {/* Name */}
                            <h3 className="font-semibold text-lg">{skill.name}</h3>

                            {/* description */}
                            <p className="text-sm text-gray-800  mt-1">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
