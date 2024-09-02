import Card from './Card';

export default function Projects({ projects }: { projects: any[] }) {

  return (
    <div className='grid gap-5 w-full md:grid-cols-2 sm:grid-cols-1'>
      {projects.map((project, index) => (
        <Card
          key={index}
          title={project.title}
          externalLink={project.externalLink}
          githubLink={project.githubLink}
          source={`/images/${project.source}`}
          tags={project.tags}
          summary={project.summary}
          wip={project.wip}
        />
      ))}
    </div>
  );
}
