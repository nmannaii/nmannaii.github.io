import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <>
      <SectionHeading>Education</SectionHeading>
      <div
        className="flex flex-wrap lg:w-[60%] m-auto gap-x-10 gap-y-3 group/title
     hover:bg-terminal-bg/40 hover:shadow-md hover:duration-200 rounded-lg py-3 px-5 mb-2"
      >
        <div className="text-md opacity-80 xs:w-full sm:w-full md:w-2/12 md:text-right">
          <div>Tunisia</div>
          <div>Oct 2019</div>
        </div>

        <div className="xs:w-full xs:w-full md:w-9/12">
          <h1 className="text-xl mb-2 font-bold group-hover/title:text-teal-600">
            Higher National Engineering School of Tunis (ENSIT)
          </h1>
          <p className="text-md font-normal">
            Computer science engineering diploma
          </p>
        </div>
      </div>
      <div
        className="flex flex-wrap lg:w-[60%] m-auto gap-x-10 gap-y-3 group/title
     hover:bg-terminal-bg/40 hover:shadow-md hover:duration-200 rounded-lg py-3 px-5 mb-2"
      >
        <div className="text-md opacity-80 xs:w-full sm:w-full md:w-2/12 md:text-right">
          <div>Tunisia</div>
          <div>Jul 2016</div>
        </div>

        <div className="xs:w-full xs:w-full md:w-9/12">
          <h1 className="text-xl mb-2 font-bold group-hover/title:text-teal-600">
            Nabeul Preparatory Engineering Institute (IPEIN)
          </h1>
          <p className="text-md font-normal">
            Successfully passed the National Engineering Entry Exam
          </p>
        </div>
      </div>
    </>
  );
}
