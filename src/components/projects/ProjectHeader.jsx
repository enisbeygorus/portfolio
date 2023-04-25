import { useContext } from "react";
import { FiClock, FiTag } from "react-icons/fi";
import SingleProjectContext from "../../context/SingleProjectContext";

const ProjectSingleHeader = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  return (
    <div>
      <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {singleProjectData.ProjectHeader.title}
      </p>
      <div className="flex">
        {singleProjectData.ProjectHeader.publishDate ? (
          <div className="flex items-center mr-10">
            <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
            <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
              {singleProjectData.ProjectHeader.publishDate}
            </span>
          </div>
        ) : null}
        <div className="flex items-center  mr-10">
          <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleProjectData.ProjectHeader.tags}
          </span>
        </div>
        {singleProjectData.Demo ? (
          <div className="flex items-center">
            <a
              href={"/demo/" + singleProjectData.Demo.pathName}
              className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-1.5 duration-300"
            >
              Demo
            </a>
          </div>
        ) : null}
        {singleProjectData.ReferenceLink ? (
          <div className="flex items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={singleProjectData.ReferenceLink.link}
              className="text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-1.5 duration-300"
            >
              Reference
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectSingleHeader;
