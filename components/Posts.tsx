import Post from "./Post";
import fetcher from "lib/fetcher";
import useSWR from "swr";
import { MostViewedDevTo } from "../lib/types";
import { FaGhost } from "react-icons/fa";

export default function Posts() {
  const { data } = useSWR<MostViewedDevTo>('/api/devto', fetcher);

  if (!data) {
    return (
      <>
        <div className="py-5">
          <FaGhost className='w-8 h-8 md:w-11 md:h-11 mb-5 animate-bounce'/>
          <span>No articles data available :(</span>
        </div>
      </>
    )
  }

  return (
    <section className='flex flex-col items-center'>
      <h2 className='font-extrabold text-3xl self-start pb-5'>Featured Posts</h2>
      <div className='grid gap-5 md:grid-cols-2 sm:grid-cols-1'>
        {
          data.articles.map((article: any) => (
            <Post
              key={article.title}
              title={article.title}
              link={article.link}
              views={article.views}
            />
          ))
        }
      </div>
    </section>
  );
}