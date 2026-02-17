import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
    {
        title: "🏢 XYZ Asset Management System",
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
            "React Query (TanStack Query)",
            "JWT",
            "Stripe",
            "Recharts",
        ],
        live: "https://xyz-asset-management.vercel.app",
        github: "https://github.com/your-github/xyz-asset-management",
    },
    {
        title: "🍽️ Bistro Boss (Restaurant App)",
        description:
            "A modern restaurant management application featuring authentication, role-based dashboards, cart functionality, and admin controls.",
        features: [
            "Firebase authentication with Google login",
            "User & admin dashboards",
            "Cart & checkout system",
            "Order history tracking",
            "Admin menu & user management",
            "Protected routes",
            "Stripe payment integration"
        ],
        tech: [
            "React",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
            "Firebase",
            "Axios",
            "React Query (TanStack Query)",
            "JWT",
        ],
        live: "https://bistro-boss-client-mu.vercel.app/",
        github: "https://github.com/laizu01993/bistro-boss-client.git",
    },
    {
        title: "📝 Blog Website (Full Stack)",
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
        description:
            "A full-featured gaming review web application where users can add, update, and manage game reviews, explore top-rated games, and maintain a personal watchlist with secure authentication.",
        features: [
            "Firebase authentication with private routes",
            "Add, update & delete personal reviews",
            "Highest-rated games section",
            "Personal watchlist management",
            "Custom 404 error handling",
            "Fully responsive UI",
        ],
        tech: [
            "React",
            "Vite",
            "Tailwind CSS",
            "DaisyUI",
            "Firebase",
            "React Router",
            "SweetAlert2",
        ],
        live: "https://gaming-review-client.vercel.app/",
        github: "https://github.com/laizu01993/gaming-review-client.git",
    },
    {
        title: "🧾 Discount PRO",
        description:
            "A coupon collecting application helping users discover brand-specific discount coupons, manage their profiles, and update information securely using Firebase Authentication.",
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

const Projects = () => {
    return (
        <section
            id="projects"
            className="py-16 bg-linear-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-800"
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
                        Projects
                    </h2>
                    <p className="text-gray-950 dark:text-gray-300 max-w-xl mx-auto">
                        Some of the projects I’ve built while learning and practicing
                        full-stack web development.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden"
                        >
                            <div className="p-6">
                                <h3 className="text-xl font-semibold dark:text-white mb-2">{project.title}</h3>
                                <p className="text-gray-950 dark:text-gray-300 mb-4">{project.description}</p>

                                {/* Features list */}
                                <ul className="list-disc list-inside mb-4 text-gray-800 dark:text-gray-300 text-sm">
                                    {project.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((item, i) => (
                                        <span
                                            key={i}
                                            className="text-sm bg-indigo-100 dark:bg-indigo-700/50 text-indigo-600 dark:text-indigo-200
                                 px-3 py-1 rounded-full hover:bg-indigo-200 dark:hover:bg-indigo-600 transition"
                                        >
                                            {item}
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
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
