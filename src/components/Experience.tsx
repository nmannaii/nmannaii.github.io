import { LinkIcon } from "@heroicons/react/24/outline";
import { experiences } from "../utils/experiences";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const proExperiences = experiences;
  return (
    <>
      <SectionHeading>Experience</SectionHeading>
      {proExperiences.map((experience, index) => (
        <div
          key={index}
          className="flex flex-wrap lg:w-[60%] m-auto gap-x-10 gap-y-3 group/title
     hover:bg-terminal-bg/40 hover:shadow-md hover:duration-200 rounded-lg py-3 px-5 mb-2"
        >
          <div className="text-md opacity-80 xs:w-full sm:w-full md:w-2/12 md:text-right">
            <div>{experience.location}</div>
            <div>{experience.dates}</div>
          </div>
          <div className="xs:w-full xs:w-full md:w-9/12">
            <h1 className="text-xl mb-2 font-bold group-hover/title:text-teal-600">
              <a href={experience.website} target="_blank">
                {experience.position}, {experience.company}
                <LinkIcon className="ms-2 size-5 transition-all ease-in-out inline-block group-hover/title:size-6 group-hover/title:duration-200" />
              </a>
            </h1>
            <p className="text-justify text-md">
              {experience.responsibilities}
            </p>
            <div className="flex flex-wrap mt-2 text-2xl gap-x-2 group-hover/title:text-teal-600">
              {experience.technologies.map((technology, index) => (
                <i
                  key={index}
                  className={`icon-${technology}-outline mr-1`}
                ></i>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
