import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const bgColor = "rgb(57 61 77 / 0.5)";
  const fgColor = "rgb(255 255 255 / 0.5)";
  return (
    <footer className="h-[200px] flex justify-center flex-col items-center bg-lighter-background/25 mt-10">
      <div className="mb-5">
        <SocialIcon
          url="https://linkedin.com/in/nmannaii"
          bgColor={bgColor}
          fgColor={fgColor}
        />
        <SocialIcon
          className="ml-5"
          url="https://github.com/nmannaii"
          bgColor={bgColor}
          fgColor={fgColor}
        />
        <SocialIcon
          className="ml-5"
          url="mailto:mannaii.najmedine@outlook.com"
          bgColor={bgColor}
          fgColor={fgColor}
        />
      </div>
      <h1 className="text-primary-text text-md">
        Copyright © {new Date().getFullYear()} Najmedine Mannaii. All rights
        reserved.
      </h1>
    </footer>
  );
}
