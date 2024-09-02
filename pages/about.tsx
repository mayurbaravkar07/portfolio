import Container from "@/components/Container";
import ExperienceCard from "@/components/ExperienceCard";
import { FaGithubSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import experienceData from "../public/dataJson/experienceData.json";

export default function About() {
  return (
    <Container title="About – Mayur Baravkar">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose dark:prose-dark leading-6">
          <h2>Socials</h2>
          <div className="list-none flex flex-row justify-start gap-3 flex-wrap">
            <a href="https://github.com/mayurbaravkar07">
              <FaGithubSquare className="w-8 h-8 md:w-11 md:h-11" />
            </a>
            <a href="https://www.linkedin.com/in/mayur-baravkar-8bb59a1ab/">
              <FaLinkedin className="w-8 h-8 md:w-11 md:h-11" />
            </a>
            {/* <a href="https://dev.to/matheusgomes062">
              <FaDev className='w-8 h-8 md:w-11 md:h-11'/>
            </a> */}
            {/* <a href="https://mgodev.hashnode.dev/">
              <SiHashnode className='w-8 h-8 md:w-11 md:h-11'/>
            </a> */}
            <a href="https://x.com/MayurBaravkar8">
              <FaSquareXTwitter className='w-8 h-8 md:w-11 md:h-11'/>
            </a>
            <a href="mailto: mayurbaravkar24@gmail.com">
              <SiGmail className="w-8 h-8 md:w-11 md:h-11" />
            </a>
            <a href="tel:+917387311923">
              <FaPhoneAlt className="w-8 h-8 md:w-11 md:h-11" />
            </a>
          </div>
          <section>
            <h2>My journey</h2>
            
            {experienceData.map((experience, index) => (
              <div key={index} className="mb-7">
                <ExperienceCard {...experience} />
                {index !== experienceData.length - 1 && (
                  <div className="border-b border-gray-300 dark:border-gray-700 my-7" />
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </Container>
  );
}
