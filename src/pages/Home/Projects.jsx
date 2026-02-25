import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

// -----------------------------
// Projects Array (all in this file)
// -----------------------------
const projects = [
    {
        title: "🏢 XYZ Asset Management System",
        image: "https://i.ibb.co.com/sdG6MtmJ/xyz-asset.png",
        description:
            "A role-based asset management system enabling HR managers and employees to track, request, and manage company assets with analytics and payment integration.",
        features: [
            "Role-based authentication (HR / Employee)",
            "Asset request & approval workflow",
            "Returnable & non-returnable asset tracking",
            "HR dashboard with analytics & charts",
            "Stripe payment integration",
            "Dynamic company branding",
        ],
        tech: [
            "React",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
            "Firebase",
            "Axios",
            "React Query",
            "JWT",
            "Stripe",
            "Recharts",
        ],
        live: "https://xyz-asset-management.vercel.app",
        github: "https://github.com/your-github/xyz-asset-management",
    },
    {
        title: "🍽️ Bistro Boss",
        image: "https://i.ibb.co.com/WNxSxZ6T/bistro-boss.png",
        description:
            "A modern restaurant management application with role-based dashboards, cart functionality, and admin controls.",
        features: [
            "Firebase authentication with Google login",
            "User & admin dashboards",
            "Cart & checkout system",
            "Order history tracking",
            "Admin menu & user management",
        ],
        tech: ["React", "Vite", "Tailwind CSS", "Firebase", "Axios", "JWT"],
        live: "https://bistro-boss-client-mu.vercel.app/",
        github: "https://github.com/laizu01993/bistro-boss-client.git",
    },
    {
        title: "📝 Blog Website",
        image: "https://i.ibb.co.com/35pX5V22/blog.png",
        description:
            "A secure blog platform where users can create, update, and manage blogs, explore featured content, and maintain a wishlist with JWT-based authentication.",
        features: [
            "JWT authentication with Firebase",
            "Add, update & delete blogs",
            "Wishlist functionality",
            "Search blogs by title & category",
            "Skeleton loading & animations",
            "Auto logout on unauthorized access",
        ],
        tech: [
            "React",
            "Node.js",
            "Express",
            "MongoDB",
            "Firebase",
            "JWT",
            "Axios",
            "TanStack Table",
            "Framer Motion",
        ],
        live: "https://blog-website-client-three.vercel.app",
        github: "https://github.com/laizu01993/blog-website-client.git",
    },
    {
        title: "🎮 Gaming Review Platform",
        image: "https://i.ibb.co.com/p6L6JfVH/game.png",
        description:
            "A full-featured gaming review web application where users can add, update, and manage game reviews, explore top-rated games, and maintain a personal watchlist.",
        features: [
            "Firebase authentication with private routes",
            "Add, update & delete personal reviews",
            "Highest-rated games section",
            "Personal watchlist management",
            "Custom 404 error handling",
            "Fully responsive UI",
        ],
        tech: ["React", "Vite", "Tailwind CSS", "DaisyUI", "Firebase", "React Router", "SweetAlert2"],
        live: "https://gaming-review-client.vercel.app/",
        github: "https://github.com/laizu01993/gaming-review-client.git",
    },
    {
        title: "🧾 Discount PRO",
        image: "https://i.ibb.co.com/k2PwDT7q/coupon.png",
        description:
            "A coupon collecting application helping users discover brand-specific discount coupons, manage profiles, and update information securely.",
        features: [
            "Email/Password login & Google Sign-In",
            "Protected (private) routes",
            "Dynamic brand & coupon listing with details",
            "User profile view & update",
            "Custom 404 error page",
            "Fully responsive design with hamburger menu",
        ],
        tech: [
            "React",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
            "React Router DOM",
            "Firebase Authentication",
            "React Icons",
            "React Hot Toast",
        ],
        live: "https://vengeful-pencil.surge.sh",
        github: "https://github.com/laizu01993/A-Coupon-Collecting-Application.git",
    },
];

// -----------------------------
// Project Card Component
// -----------------------------
const ProjectCard = ({ project }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const image = Array.isArray(project.image) ? project.image[0] : project.image;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
        >
            {/* Screenshot */}
            <img
                src={image}
                alt={project.title}
                onClick={() => setModalOpen(true)}
                className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-t-2xl cursor-pointer hover:opacity-90 transition"
            />

            {/* Modal for full image */}
            {modalOpen && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <img
                        src={image}
                        alt={project.title}
                        className="max-w-3xl max-h-[80vh] rounded-lg"
                    />
                    <button
                        onClick={() => setModalOpen(false)}
                        className="absolute top-5 right-5 text-white text-2xl"
                    >
                        ✕
                    </button>
                </div>
            )}

            {/* Project Info */}
            <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold dark:text-white mb-2">{project.title}</h3>

                {/* Animated tagline */}
                <p className="text-indigo-800 dark:text-indigo-300 mb-3">
                    <Typewriter
                        words={project.tech.slice(0, 4)}
                        loop={true}
                        cursor
                        cursorStyle="|"
                        typeSpeed={80}
                        deleteSpeed={50}
                        delaySpeed={2000}
                    />
                </p>

                <p className="text-gray-800 dark:text-gray-300 mb-3">{project.description}</p>

                {/* Features */}
                <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 text-sm">
                    {project.features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                        <span
                            key={i}
                            className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-indigo-200 dark:from-indigo-700 dark:to-indigo-600 text-indigo-800 dark:text-white hover:scale-105 transition"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white font-medium"
                    >
                        <FaGithub /> Code
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-100 font-medium"
                    >
                        <FaExternalLinkAlt /> Live
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

// -----------------------------
// Main Projects Section
// -----------------------------
const Projects = () => {
    return (
        <section id="projects" className="py-16 bg-linear-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-center dark:text-gray-300 mb-12"
                >
                    Projects & <span className="text-indigo-500">Portfolio</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;