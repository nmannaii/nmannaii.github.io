import SectionHeading from "./SectionHeading";

export default function Skills() {
  const skills = [
    "java",
    "javascript",
    "typescript",
    "html",
    "css3",
    "scss",
    "tailwind",
    "angular",
    "ionic",
    "capacitor",
    "spring",
    "typeorm",
    "hibernate",
    "mysql",
    "postgresql",
    "sqlite",
    "mongodb",
    "docker",
    "git",
    "npm",
    "maven",
  ];
  return (
    <>
      <SectionHeading>Skills</SectionHeading>
      <div className="flex flex-wrap gap-3 justify-center py-5">
        {skills.map((skill, index) => (
          <div
            className="w-[100px] h-[100px] rounded-full bg-card-background/50 shadow-sm flex items-center justify-center"
            key={index}
          >
            <i className={`icon-${skill}-outline ` + 'text-5xl text-white/50'}></i>
          </div>
        ))}
      </div>
    </>
  );
}
