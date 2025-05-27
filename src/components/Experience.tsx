import { motion } from "framer-motion";

export function Experience() {
    const experiences = [
        {
            title: "Backend Developer Intern",
            company: "Training and Placement Cell, DTU",
            duration: "March 2025 - Present",
            description: "Developed backend features of their resume manager portal, streamlining campus recruitments and optimizing data management processes.",
        },
        {
            title: "Student Trainee",
            company: "Institute of Nuclear Medicine and Applied Sciences, DRDO",
            duration: "June 2024 - July 2024",
            description: "Worked on a  Micro Aerial Vehicle capable of autonomously tracking a vehicle equipped with an ArUco marker, which is detected using OpenCV by the onboard camera."
        },
        {
            title: "Investor Relations Intern",
            company: "Agility Ventures",
            duration: "April 2023 - June 2023",
            description: "Engaged senior executives of leading FMCG brands, acquainting them with angel investing and expertly facilitating their onboarding process."        }
    ];

    return (
        <div className="w-full bg-black min-h-screen py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold text-yellow-500 mb-12"
                >
                    Experience
                </motion.h2>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-yellow-500/20"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.2 }}
                            className={`relative mb-12 ${
                                index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                            } md:w-1/2`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-yellow-500"></div>

                            <div className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-yellow-500/50 transition-colors duration-300">
                                <h3 className="text-xl font-bold text-white mb-2">{exp.title}</h3>
                                <h4 className="text-yellow-500 mb-2">{exp.company}</h4>
                                <p className="text-gray-400 mb-4">{exp.duration}</p>
                                <p className="text-gray-300 mb-4">{exp.description}</p>
                                
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
} 