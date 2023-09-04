import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiArrowDownCircle } from "react-icons/fi";
import developerLight from "../../images/developer.svg";
import developerDark from "../../images/developer-dark.svg";
import { motion } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiSocketdotio } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiMicrosoftazure } from "react-icons/si";
import { SiJest } from "react-icons/si";

const AppBanner = () => {
  const [activeTheme] = useThemeSwitcher();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2"
    >
      <div className="w-full md:w-1/3 text-left">
        <div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
            className="font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
          >
            Hi, I am Enis
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.2,
            }}
            className="font-general-medium mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-500 dark:text-gray-200"
          >
            A Front End Developer & MERN Developer
          </motion.p>
        </div>
        <div className="text-gray-500 dark:text-gray-200">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
            className="mt-12 font-general-semibold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
          >
            Tech
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.3,
            }}
            className="flex mt-4 gap-4 flex-wrap justify-around"
          >
            <FaReact size={40} />
            <FaHtml5 size={40} />
            <FaCss3Alt size={40} />
            <FaNodeJs size={40} />
            <FaLinux size={40} />
            <SiJavascript size={40} />
            <SiNextdotjs size={40} />
            <SiMongodb size={40} />
            <SiSocketdotio size={40} />
            <SiTypescript size={40} />
            <SiJest size={40} />
            <SiMicrosoftazure size={40} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.3,
            }}
            className="flex justify-center sm:block"
          >
            <a
              download="Enis-Resume.pdf"
              href="/files/Enis-Resume.pdf"
              className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
              aria-label="Download Resume"
            >
              <FiArrowDownCircle className="mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
              <span className="text-sm sm:text-lg font-general-medium duration-100">
                Download CV
              </span>
            </a>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -180 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
      >
        <img
          src={activeTheme === "dark" ? developerLight : developerDark}
          alt="Developer"
        />
      </motion.div>
    </motion.section>
  );
};

export default AppBanner;
