import {useState,useEffect } from 'react'
import CircleRating from './CircleRating';
import Router from 'next/router';
import { ClipLoader } from 'react-spinners';
import Link from 'next/link';
import Image from 'next/image';
import { BsStarFill} from 'react-icons/bs';
const Tabs = ({handleOnSearch,movies}) => {

  

  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
  }, [searchQuery]);



    const [londing, setLoading] = useState(false)
    Router.events.on('routeChangeStart',(url) =>{
    setLoading(true)
    });
    Router.events.on('routeChangeComplete',(url) =>{
      setTimeout(() => setLoading(false), 500)
    });
 
    useState(() => {
      setTimeout(() => setLoading(true)) //ใส่เป็น  useEffect ข้างหน้าก็ได้
    }, [])

    useState(() => {
      setTimeout(() => setLoading(false),1000) //ใส่เป็น  useEffect ข้างหน้าก็ได้
    }, [])
 
    
    const override = {
      display: "block",
      margin: "0 auto",
      position: "absolute",
      left:"48%",
      top:"35%",
  
    };
    

  return (
    <>

       <div className="flex justify-center mt-5 mb-5">
             <input value={searchQuery} 
                 onChange={(e) => {
                  handleOnSearch(e.target.value);
                  setSearchQuery(e.target.value);
                }}
                 type="text"
                 placeholder="ค้นหา"
                 className="outline-none px-2 py-1 ml-1 text-black rounded-xl w-[100%] font-bold border-solid border-2 border-sky-500"
             />
             <svg
                 className="h-5 fill-cyan-400 mt-2 pl-2 abs"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 512 512">
                 <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
             </svg >
         </div>
         {searchQuery && (
      <p className="query">ผลลัพการค้นหา<b className='text-cyan-400   justify-center'>&nbsp;{searchQuery}</b> </p>
    )}

      
      {
        londing 
          ? (<div className="loader">
        <ClipLoader 
       color={"#00CED1"}
       loading={true}
       cssOverride={override}
       size={40}
       aria-label="Loading Spinner"
       data-testid="loader" />
          </div>)
          : (movies
            ? (
               <div className='grid  grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  2xl:grid-cols-5 gap-2  mt-2'>
             {movies.map((movie) =>(
                          <>
                        <div className=' pl-5   '>
                          <div className='relative '>
                          <Image className='w-[270px] h-[350px] shadow-sm rounded-md mt-2 customimage'
                           src={`http://localhost:1337${movie.attributes.Image.data.attributes.url}`}
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
                          <div className='flex flex-col mt-6'> 
                          <h2>{movie.attributes.Title}</h2>
                         </div>
                       </div>
                      
                       </>      
                          ))} 
             
             {/** เอาไว้ใส Series */}
          
             
         {/** เอาไว้ใส Series */} 

       </div> )
            : <p className="no__result text-white">no results</p>
          )
      }

    </>
  )
}

export default Tabs