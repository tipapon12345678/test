import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import CircleRating from './CircleRating';

const Card = ({movies}) => {
   


  return (
    <>
       <div className='grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-2 '>
                     {movies.map((movie) =>(
                          <div key={movie.id}>
                           <Link href={`/${movie.attributes.Slug}`}>
                           <div className=''>
                       
                       <div className='relative '>
                       <Image className='w-[270px] h-[350px] shadow-sm rounded-md mt-2 customimage'
                        src={`${movie.attributes.Image.data.attributes.url}`}
                        alt={movie.attributes.Image.data.attributes.name}
                        height="400"
                        width="400"
                        rel="preload"
                        priority={false} />
                        <div className='absolute bottom-[-1.2rem] left-2 flex justify-center items-center '>
                           <div className='w-[44px] h-[44px] bg-white rounded-full customCircleout'>
                              <div className='w-[40px] h-[40px] bg-white rounded-full clece '>
                                 <CircleRating  rating={movie.attributes.Rating} />
                               </div>
                           </div>
                        </div>
                       </div>
                       <div className='flex flex-col mt-6 customtex'> 
                       <h2>{movie.attributes.Title}</h2>
               
                      </div>
                      
                    </div>
                           </Link>
              
                      
                       </div>      
                          ))} 
                     </div>
       
   
 
   </>
  )
}

export default Card