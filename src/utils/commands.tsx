import JSONPretty from "react-json-pretty";
import "react-json-pretty/themes/monikai.css";
const help = (
  <>
    <div className="mb-2 underline">Supported commands</div>
    <JSONPretty
      data={[
        "help",
        "currentLocation",
        "professionalExperience",
        "education",
        "skills",
        "clear"
      ]}
    />
  </>
);

const currentlocation = (
  <JSONPretty
    data={{
      country: "Tunisia",
      city: "Tunis",
    }}
  />
);

const professionalexperience = (
  <JSONPretty
    data={{
      siteflow: {
        period: "Aug 2021 - Apr 2024",
        website: "https://siteflow.com",
      },
      mss: { period: "Apr 2019 - Aug 2021", website: "http://www.msstn.net" },
    }}
  />
);

const education = (
  <JSONPretty
    data={{
      university: "Higher National Engineering School of Tunis",
      abbreviation: "ENSIT",
      year: "2015 - 2019",
    }}
  />
);

const skills = (
  <JSONPretty
    space="4"
    data={{
      "programming-languges": ["Java", "Javascript", "Typescript"],
      "unit-tests": ["JUnit", "Jasmine & Karma"],
      web: ["HTML5", "CSS3", "SCSS"],
      frameworks: [
        "Angular 2+",
        "Ionic",
        "CapacitorJS",
        "Spring",
        "Typeorm",
        "Hibernate",
      ],
      databases: ["Mysql", "PostgreSQL", "Sqlite", "Mongodb"],
      tools: ["Git", "Postman", "Swagger", "npm", "Maven", "Docker", "Jira"],
    }}
  />
);

export const commands = {
  help,
  currentlocation,
  professionalexperience,
  education,
  skills,
};
