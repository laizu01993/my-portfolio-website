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

const skills = [
    { name: "React", icon: <FaReact />, color: "text-cyan-500" },
    { name: "JavaScript (ES6+)", icon: <SiJavascript />, color: "text-yellow-500" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-700" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-orange-500" },
    { name: "JWT Auth", icon: <SiJsonwebtokens />, color: "text-purple-500" },
    { name: "Git & GitHub", icon: <FaGitAlt />, color: "text-red-500" },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-24 bg-gradient-to-b from-white to-indigo-50"
        >
            <div className="max-w-6xl mx-auto px-4">

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Technologies I use to build fast, scalable, and
                        user-focused web applications.
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            viewport={{ once: true }}
                            className="group bg-white/70 backdrop-blur-md
                         border border-gray-200 rounded-2xl
                         p-6 text-center shadow-sm
                         hover:shadow-xl hover:-translate-y-2
                         transition-all duration-300"
                        >
                            <div
                                className={`text-4xl mb-4 mx-auto ${skill.color}
                group-hover:scale-110 transition-transform`}
                            >
                                {skill.icon}
                            </div>
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
