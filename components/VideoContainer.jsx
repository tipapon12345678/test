import React from 'react'

const VideoContainer = ({movie}) => {
  return (
    <>
           <iframe key={movie.id} width="100%" height="100%" src={`${movie.Iframe}`}frameBorder="0" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
           allowFullScreen={true}>
           </iframe> 
           
            {/*
            <div className='flex justify-end mb-3 text-black mt-2'>
          <span className='rounded-full  font-bold py-1 px-4 bg-cyan-400'>{tabs.Title}</span>  
            </div>* */}
      </>
  )
}

export default VideoContainer