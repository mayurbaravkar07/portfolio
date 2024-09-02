import React, { FunctionComponent } from 'react'
import { AiOutlineArrowRight, AiOutlineEye } from 'react-icons/ai';


interface PostProps {
  /**
   * Title Post
   */
  title: string;
  /**
   * Link to access the post
   */
  link: string;
  /**
   * Views related to the post
   */
  views: number;
}

const Post: FunctionComponent<PostProps> = ({
  title,
  link,
  views
}) => {
  return (
      <div className="sm:w-ful h-[18rem] md:h-[21rem] p-5 bg-zinc-100 rounded-lg drop-shadow-xl dark:bg-gray-800 dark:border-gray-700 gap-5 transform hover:scale-[1.01] transition-all">
          <a href={link} className='font-semibold text-4xl md:text-4xl flex items-top'>{title}</a>
          <div className='flex flex-row items-center fixed bottom-0 py-5 text-2xl capsize'>
            <AiOutlineEye/>
            <p className='ml-2'>{views}</p>
          </div>
          <a href={link} className='font-semibold text-4xl md:text-4xl flex'>
            <AiOutlineArrowRight className='absolute right-5 bottom-5 text-4xl'/>
          </a>
          
      </div>
  )
}

export default Post;
