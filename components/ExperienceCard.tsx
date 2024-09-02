import React, { FunctionComponent, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import cn from 'classnames';
import {IExperienceCardProps} from '../types/IExperienceCardProps'


function TagTheme(color: string) {
  const theme = [
    {color: 'green', class:'bg-green-200 text-green-700'},
    {color: 'blue', class:'bg-blue-200 text-blue-700'},
    {color: 'yellow', class:'bg-yellow-200 text-yellow-700'},
    {color: 'red', class:'bg-red-200 text-red-700'},
    {color: 'gray', class:'bg-gray-200 text-gray-700'},
    {color: 'pink', class:'bg-pink-200 text-pink-700'},
    {color: 'purple', class:'bg-purple-200 text-purple-700'},
    {color: 'orange', class:'bg-orange-200 text-orange-700'}
  ].filter(item =>
    item.color === color
  )
  return theme[0].class.toString()
}


const ExperienceCard: FunctionComponent<IExperienceCardProps> = ({
  role,
  company,
  source,
  description,
  images,
  startDate,
  endDate,
  ...props
}) => {
  const [showImageModal, setShowImageModal] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let handler = (e: any) => {
      if(!imageRef.current?.contains(e.target)) {
        setShowImageModal('');
        setIsModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return() => {
      document.removeEventListener('mousedown', handler)
    }
  })

  const ImageModal = ({src}: {src: string}) => {
    return (
      <div id="myModal" className={`${isModalOpen ? 'block': 'hidden'} fixed z-1 pt-24 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-70`} 
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
        <Image
          ref={imageRef}
          src={src}
          width={700}
          height={700}
          className="m-auto block w-4/5 max-w-3xl animate-fade-in-up rounded-lg"
          style={{margin: 'auto'}}
          alt=""/>
        <div id="caption" className="m-auto block w-4/5 max-w-3xl text-center text-white py-3 h-36"></div>
      </div>
    )
  }
    
  return (
    <section className='shadow-2xl dark:shadow-none dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-800'>
      <div className='md:flex flex-row justify-between gap-3 hidden'>
        {
          images.map((object: {alt: string, image: string}, i: number) => {
            return (
              <>
                <Image
                  key={i}
                  className="rounded-lg md:self-center even:w-[50%] border border-gray-200 dark:border-gray-800 cursor-pointer"
                  src={`${object.image}`}
                  alt={object.alt}
                  width={150}
                  height={150}
                  style={{
                    minWidth: '22%',
                    height: '100px',
                    objectFit: "cover"
                  }}
                  onClick={() => {setShowImageModal(object.image); setIsModalOpen(true)}}
                />
              </>
              )
            }
          )
        }
      </div>
      <ImageModal src={showImageModal}/>
      <div className='flex flex-row md:hidden'>
        <Image
          className="rounded-lg"
          src={`${images[0].image}`}
          alt={images[0].alt}
          width={150}
          height={150}
          style={{
            minWidth: '100%',
            height: '200px',
            objectFit: "cover"
          }}
          />
      </div>
      <h3 className='mb-0'>{role} @ <a href={source} className='uppercase'>{company}</a></h3>
      <p className='text-xs text-gray-400 dark:text-gray-400 uppercase'>{startDate} - {endDate}</p>
      <div className=''>
          {
            props.tags?.map((object: {label: string, color: string}, i: number) =>
            <div
            className={cn(`cursor-pointer text-[10px] inline-flex items-center font-bold leading-4 uppercase px-2 rounded-sm mr-2 hover:-translate-y-1 transition-all ${TagTheme(object.color)}`
            )}
            key={i}
            >
                {object.label}
              </div>
            )
          }
      </div>
      <p>{description}</p>
  </section>
  )
}

export default ExperienceCard;
