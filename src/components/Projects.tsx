import { LinkIcon } from "@heroicons/react/24/outline";
import "./Projects.css";
import SectionHeading from "./SectionHeading";
export default function Projects() {
  return (
    <>
      <SectionHeading>Projects</SectionHeading>
      <a
        href="https://play.google.com/store/apps/details?id=io.siteflow.mobile"
        target="_blank"
        className="bg-[#eceff1] cursor-pointer transition ease-in-out md:hover:scale-110 
        lg:w-[60%] md:w-[80%] w-[90%] xl:w-[60%] m-auto mb-10 rounded-xl shadow-lg grid md:grid-cols-3 sm:grid-cols-1 items-center px-10"
      >
        <div className="text-background col-span-2 py-10">
          <img
            src="/projects/siteflow-logo.webp"
            className="w-[30px] rounded-md mb-3"
          />
          <h1 className="text-3xl font-bold mb-3">
            Siteflow Mobile <LinkIcon className="size-5 inline" />
          </h1>
          <h2 className="text-xl font-semibold text-secondary-text mb-2">
            Siteflow <i className="text-xs">2021-2024</i>
          </h2>
          <p className="text-lg text-secondary-text">
            Implemented the new design and contributed in the development of the
            core features of the application.
          </p>
          <div className="flex items-center gap-2 mt-3 flex-wrap text-xs">
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Ionic
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              CapacitorJs
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Typeorm
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Sqlite
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Mysql
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Angular
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Spring boot
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Git / Bitbucket
            </div>
          </div>
        </div>
        <div>
          <img src="/projects/siteflow.png" />
        </div>
      </a>

      <a
        href="https://www.vanitygab.com/"
        target="_blank"
        className="bg-[#eceff1] cursor-pointer transition ease-in-out md:hover:scale-110 
        lg:w-[60%] md:w-[80%] w-[90%] xl:w-[60%] m-auto mb-10 rounded-xl shadow-lg grid md:grid-cols-3 sm:grid-cols-1 items-center px-10"
      >
        <div className="text-background col-span-2 py-10">
          <img
            src="/projects/vanity-logo.png"
            className="w-[50px] rounded-md mb-3"
          />
          <h1 className="text-3xl font-bold mb-3">
            Vanity <LinkIcon className="size-5 inline" />
          </h1>
          <h2 className="text-lg font-semibold text-secondary-text mb-2">
            M.S.S <i className="text-xs">2020-2021</i>
          </h2>
          <p className="text-lg text-secondary-text">
            I started by developing the base user interface from scratch for the
            Vanity project, and subsequently contributed to the development of
            all functionalities on both the backend and frontend.
          </p>
          <div className="flex items-center gap-2 mt-3 flex-wrap text-xs">
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Angular
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Bootstrap
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Postgresql
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Spring boot
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Git / Gitlab
            </div>
          </div>
        </div>
        <div>
          <img src="/projects/vanity.png" />
        </div>
      </a>

      <div
        className="bg-[#eceff1] cursor-pointer transition ease-in-out md:hover:scale-110 
        lg:w-[60%] md:w-[80%] w-[90%] xl:w-[60%] m-auto mb-10 rounded-xl shadow-lg grid md:grid-cols-3 sm:grid-cols-1 items-center px-10"
      >
        <div className="text-background col-span-2 py-10">
          <img
            src="/projects/reamon-logo.png"
            className="w-[100px] rounded-md mb-3"
          />
          <h1 className="text-3xl font-bold mb-3">
            Reamon
          </h1>
          <h2 className="text-lg font-semibold text-secondary-text mb-2">
            M.S.S <i className="text-xs">2019</i>
          </h2>
          <p className="text-lg text-secondary-text">
            I implemented the entire Reamon project from scratch, a solution
            dedicated to monitoring Android cash registers.
          </p>
          <div className="flex items-center gap-2 mt-3 flex-wrap text-xs">
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Angular
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Bootstrap
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Mongodb
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Spring boot
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Kafka
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Redis
            </div>
            <div className="px-3 py-1 rounded-full bg-background/70 text-white">
              Git / Gitlab
            </div>
          </div>
        </div>
        <div>
          <img src="/projects/reamon.png" />
        </div>
      </div>
    </>
  );
}
