import { motion } from "framer-motion";
import { PathVisualizer } from "../components/projectDemos";
import { SingleProjectProvider } from "../context/SingleProjectContext";
import DemoDescriptionModal from "../components/projectDemos/descriptionModal";
import Button from "../components/reusable/Button";
import { useState } from "react";

const ProjectDemo = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
        delay: 0.1,
      }}
      className="container mx-auto flex flex-col justify-center items-center py-5 lg:py-10 lg:mt-10"
    >
      <SingleProjectProvider>
        <div className="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
          <span
            onClick={setShowModal}
            className="font-general-medium block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-lg px-4 py-2 mt-2 duration-300"
            aria-label="Description"
          >
            <Button title="Description" />
          </span>
        </div>
        {showModal ? (
          <DemoDescriptionModal onClose={() => setShowModal(false)} />
        ) : null}
        <PathVisualizer />
      </SingleProjectProvider>
    </motion.div>
  );
};

export default ProjectDemo;
