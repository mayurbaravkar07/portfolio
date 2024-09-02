import Container from "@/components/Container";
import Projects from "@/components/Projects";
import projectsData from '../public/dataJson/projectsData.json';

export default function About() {

  return (
    <Container title="About – Matheus Gomes">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Projects
        </h1>
        <Projects projects={projectsData}/>
      </div>
    </Container>
  );
}
