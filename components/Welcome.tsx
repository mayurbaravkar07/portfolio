import Image from "next/image";
import Hello from "./Hello";

export default function Welcome() {
  return (
    <>
      <section>
        <div className="flex md:flex-row flex-col-reverse gap-5">
          <div className="flex-row mr-[2rem]">
            <Hello />
            <h1 className="font-bold text-5xl max-w-5xl mb-3">
              I&apos;m Mayur Baravkar
            </h1>
            <h3 className="inline-block font-bold text-xl text-pretty bg-orange-200 text-orange-700 mb-1">
              Full Stack Developer
            </h3>
            <h3 className="text-xl text-gray-600 dark:text-gray-300 mb-6">
              I may not be a rocket scientist 🚀,
              <br />
              but I can launch your website into orbit 🪐!
            </h3>
          </div>

          <Image
            className="rounded-xl md:self-center hidden md:block hover:-translate-y-1 transition-all cursor-pointer"
            src="/images/profile-pic.png"
            alt="Avatar"
            height={150} // Desired size with correct aspect ratio
            width={150} // Desired size with correct aspect ratio
          />
        </div>
        <button
          className="flex items-center justify-center px-10 py-3 font-medium bg-blue-500 dark:bg-blue-500 text-gray-100 rounded-lg shadow-blue-900 shadow-lg active:shadow-none active:scale-95 hover:bg-blue-800 dark:hover:bg-blue-800 hover:text-white dark:hover:text-white disabled:bg-gray-400/80 disabled:shadow-none disabled:cursor-not-allowed transition-colors duration-200"
          onClick={() => {
            window.open("/Resume.pdf", "_blank");
          }}
        >
          My CV
        </button>
        <div className="mt-6">
          <h1 className="font-bold text-xl">Skills</h1>
          <div className="mt-2 inline-flex flex-wrap gap-2">
            {[
              "React.js",
              "Node.js",
              "Next.js",
              "JavaScript",
              "TypeScript",
              "MongoDB",
              "SQL",
              "Docker",
              "AWS",
              "Redux-Toolkit",
              "Unit Testing",
              "Vitest",
              "Jest",
              "Tailwind-CSS",
              "Linux",
              "Java",
            ].map((skill) => (
              <div
                key={skill}
                className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-medium text-sm font-bold bg-black text-white hover:-translate-y-1"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 font-medium text-sm font-bold bg-black text-white  hover:-translate-y-1">
React</div> */}
    </>
  );
}
