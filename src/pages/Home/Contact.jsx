
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

// const contactMethods = [
//     {
//         type: "Email",
//         icon: <FaEnvelope />,
//         value: "laizuaktar6@gmail.com",
//         href: "https://mail.google.com/mail/?view=cm&fs=1&to=laizuaktar6@gmail.com",
//         color: "text-indigo-500",
//         hoverBg: "hover:bg-indigo-50 dark:hover:bg-indigo-900",
//     },
//     {
//         type: "WhatsApp",
//         icon: <FaWhatsapp />,
//         value: "+880 1993 795 774",
//         href: "https://wa.me/8801993795774",
//         color: "text-green-500",
//         hoverBg: "hover:bg-green-50 dark:hover:bg-green-900",
//     },
//     {
//         type: "Location",
//         icon: <FaMapMarkerAlt />,
//         value: "Khulna, Bangladesh",
//         href: null,
//         color: "text-pink-500",
//         hoverBg: "hover:bg-pink-50 dark:hover:bg-pink-900",
//     },
// ];

// const socialLinks = [
//     { icon: <FaGithub />, href: "https://github.com/laizu01993", color: "hover:text-gray-900 dark:hover:text-gray-200" },
//     { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shahanara-aktar-8098853b1/", color: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300" },
// ];

// const Contact = () => {
//     const [hovered, setHovered] = useState(null);

//     const boxVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: { y: 0, opacity: 1 },
//     };

//     return (
//         <section
//             id="contact"
//             className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-20 bg-linear-to-b from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
//         >
//             {/* Section Title */}
//             <motion.h2
//                 initial={{ opacity: 0, y: -20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-300 mb-12"
//             >
//                 Get <span className="text-indigo-500">In Touch</span>
//             </motion.h2>

//             {/* Contact Boxes */}
//             <motion.div
//                 initial="hidden"
//                 whileInView="visible"
//                 transition={{ staggerChildren: 0.15 }}
//                 className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 w-full max-w-5xl"
//             >
//                 {contactMethods.map((method, i) => (
//                     <motion.a
//                         key={i}
//                         variants={boxVariants}
//                         href={method.href || "#"}
//                         target={method.href ? "_blank" : "_self"}
//                         rel={method.href ? "noopener noreferrer" : undefined}
//                         onMouseEnter={() => setHovered(i)}
//                         onMouseLeave={() => setHovered(null)}
//                         className={`
//               flex flex-col items-center p-8 rounded-2xl shadow-lg 
//               bg-white dark:bg-gray-800 transition-all duration-300 transform 
//               hover:scale-105 hover:shadow-2xl cursor-pointer ${method.hoverBg}
//               flex-1
//             `}
//                     >
//                         <div
//                             className={`text-5xl mb-3 transition-colors duration-300 ${method.color} ${hovered === i ? "animate-bounce" : ""
//                                 }`}
//                         >
//                             {method.icon}
//                         </div>
//                         <p className="text-gray-700 dark:text-gray-200 font-medium text-center wrap-break-word">
//                             {method.value}
//                         </p>
//                     </motion.a>
//                 ))}
//             </motion.div>

//             {/* Social Links */}
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1 }}
//                 className="flex gap-8 text-4xl"
//             >
//                 {socialLinks.map((social, idx) => (
//                     <a
//                         key={idx}
//                         href={social.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className={`transition-colors duration-300 transform hover:-translate-y-1 ${social.color}`}
//                     >
//                         {social.icon}
//                     </a>
//                 ))}
//             </motion.div>

//             {/* Optional CTA button */}
//             <motion.a
//                 href="https://mail.google.com/mail/?view=cm&fs=1&to=laizuaktar6@gmail.com"
//                 className="mt-12 mb-6 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
//                 whileHover={{ scale: 1.05 }}
//             >
//                 Send Me a Message
//             </motion.a>
//         </section>
//     );
// };

// export default Contact;
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Tooltip } from "react-tooltip"; 

const contactMethods = [
    {
        type: "Email",
        icon: <FaEnvelope />,
        value: "laizuaktar6@gmail.com",
        href: "https://mail.google.com/mail/?view=cm&fs=1&to=laizuaktar6@gmail.com",
        color: "text-indigo-500",
        hoverBg: "hover:bg-indigo-50 dark:hover:bg-indigo-900",
        tooltip: "Send me an email"
    },
    {
        type: "WhatsApp",
        icon: <FaWhatsapp />,
        value: "+880 1993 795 774",
        href: "https://wa.me/8801993795774",
        color: "text-green-500",
        hoverBg: "hover:bg-green-50 dark:hover:bg-green-900",
        tooltip: "Chat with me on WhatsApp"
    },
    {
        type: "Location",
        icon: <FaMapMarkerAlt />,
        value: "Khulna, Bangladesh",
        href: null,
        color: "text-pink-500",
        hoverBg: "hover:bg-pink-50 dark:hover:bg-pink-900",
        tooltip: "My current location"
    }
];

const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/laizu01993", color: "hover:text-gray-900 dark:hover:text-gray-200 text-black  dark:text-white", tooltip: "GitHub Profile" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/shahanara-aktar-8098853b1/", color: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300", tooltip: "LinkedIn Profile" },
];

const Contact = () => {
    const [hovered, setHovered] = useState(null);
    const controls = useAnimation();

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-20 bg-gradient-to-b from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-500"
        >
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-300 mb-12"
            >
                Get <span className="text-indigo-500">In Touch</span>
            </motion.h2>

            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.15 }}
                className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16 w-full max-w-5xl"
            >
                {contactMethods.map((method, i) => (
                    <motion.a
                        key={i}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.15 } }
                        }}
                        href={method.href || "#"}
                        target={method.href ? "_blank" : "_self"}
                        rel={method.href ? "noopener noreferrer" : undefined}
                        onMouseEnter={() => setHovered(i)}
                        onMouseLeave={() => setHovered(null)}
                        className={`
              relative flex flex-col items-center p-8 rounded-2xl shadow-2xl
              bg-white dark:bg-gray-800 transition-all duration-300 transform 
              hover:scale-105 hover:-translate-y-2 cursor-pointer ${method.hoverBg} flex-1
            `}
                        data-tooltip-id={`tooltip-${i}`}
                        data-tooltip-content={method.tooltip}
                    >
                        <div className={`text-5xl mb-3 transition-colors duration-300 ${method.color} ${hovered === i ? "animate-bounce" : ""}`}>
                            {method.icon}
                        </div>
                        <p className="text-gray-700 dark:text-gray-200 font-medium text-center break-words">{method.value}</p>
                        <Tooltip id={`tooltip-${i}`} place="top" effect="solid" className="dark:bg-gray-700 dark:text-white rounded-md px-3 py-1 text-sm" />
                    </motion.a>
                ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex gap-8 text-4xl"
            >
                {socialLinks.map((social, idx) => (
                    <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`relative transition-colors duration-300 transform hover:-translate-y-1 ${social.color}`}
                        data-tooltip-id={`social-tooltip-${idx}`}
                        data-tooltip-content={social.tooltip}
                    >
                        {social.icon}
                        <Tooltip id={`social-tooltip-${idx}`} place="top" effect="solid" className="dark:bg-gray-700 dark:text-white rounded-md px-3 py-1 text-sm" />
                    </a>
                ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=laizuaktar6@gmail.com"
                className="mt-12 mb-6 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-full shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
            >
                Send Me a Message
            </motion.a>
        </section>
    );
};

export default Contact;