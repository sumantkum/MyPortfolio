import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Full Stack Developer (Fresher)",
    company: "Self Projects / Practice",
    date: "2023 - Present",
    responsibilities: [
      "Developing responsive web applications using HTML, CSS, JavaScript, and React.",
      "Building backend services and REST APIs using Node.js and Express.",
      "Working with databases like MongoDB/MySQL ",
    ],
  },
  {
    job: "Full Stack Developer Trainee",
    company: "Online Courses & Training",
    date: "2023 - 2024",
    responsibilities: [
      "Learning full stack development concepts through online courses and hands-on practice.",
      "Creating mini projects to understand frontend and backend integration.",
      "Using Git and GitHub for version control. ",
    ],
  },
  {
    job: "Frontend & Backend Developer (Projects)",
    company: "Personal / Academic Projects",
    date: "2024 - Present",
    responsibilities: [
      "Developing full stack projects using React, Node.js, and Tailwind CSS.",
      "Designing user-friendly interfaces and connecting them with backend APIs.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
