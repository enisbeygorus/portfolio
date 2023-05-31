import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProjectSingle = ({ title, category, image, projectPath }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to={`/projects/${projectPath}`} aria-label="Single Project">
        <div className="flex  sm:block p-4 sm:p-0 rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div
            className="flex justify-center items-center w-1/4 sm:w-auto"
            style={{ aspectRatio: "1 / 1" }}
          >
            <img
              src={image}
              className="w-full h-full rounded-md border-none object-cover"
              alt="Single Project"
            />
          </div>
          <div className="h-auto flex-1 text-center px-4 py-6 sm:h-40 ">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
