import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SetHeader from '@/components/SetHeader';
import MovieList from '@/components/MovieList';
import qs from 'qs'
import {  useState,useRef} from "react";
import VideoContainer from '@/components/VideoContainer';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Markdown from 'react-markdown'
import { PlayIcon}   from '@/components/Playbtn'
import Detil from '@/components/Detil';
import Modul from '@/components/Modul';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'
const drawerWidth = 240;

const movie = ({movies,movie,categories,types,categorie,type,movi,video}) => {

  const [isvideo, setvideo] = useState({
    //หลักการคือทำยังไฝก็ได้ให้ดึงมาเเค่ ID เดียว
    //จะเรีกใช้อันไหนให้ตั้งชือให้เหมือนกัน สมมุติว่าจะดึง Title ใน strapi มาใช้งานให้ตั้งชื่อ   part:movie.data[0].attributes.gg[0].part แล้วไปเรียกใช้งานใน Compennance   {tabs.title}
    Iframe:movie.data[0].attributes.ep[0].Iframe,
    Title:movie.data[0].attributes.ep[0].Title
 
    // Title เรียกเเทน artbi   
   });
 
  // onFocus 
   const [selectedTab, setSelectedTab] = useState(0);
   const firstBtnRef = useRef();
 
  {/** useEffect(() => {
     firstBtnRef.current.focus();
   }, []);
 */} // หากใส่ตัวนี้มันจะ Scoll ให้ Auto

   // onFocus  
   const [showModal, setShowModal] = useState(false);
  




  const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
  
    const handleDrawerClose = () => {
      setIsClosing(true);
      setMobileOpen(false);
    };
  
    const handleDrawerTransitionEnd = () => {
      setIsClosing(false);
    };
  
    const handleDrawerToggle = () => {
      if (!isClosing) {
        setMobileOpen(!mobileOpen);
      }
    };

  return (
    <Box sx={{ display: 'flex' }} className='NavBar'>
    <CssBaseline />
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <div className='setdetailhead'>
      <Toolbar className='flex justify-between '>
        <Typography variant="h6" noWrap component="div">
        
        </Typography>

        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
         <MenuIcon />
        </IconButton>
      </Toolbar>
      </div>
    </AppBar>
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
       
        variant="temporary"
        open={mobileOpen}
        onTransitionEnd={handleDrawerTransitionEnd}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
      <SetHeader categories={categories.items}
                   types={types.items}/>
     
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        open
      >
      
      <SetHeader categories={categories.items}
                   types={types.items}/>

      </Drawer>
    </Box>
    <Box className=' text-we'
      component="main"
      sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
    >
      <Toolbar />

      <div className='container mx-auto'>
                           <div className="detailsBanner">
                                 <div className="backdrop-img">
                                 <LazyLoadImage
                                   alt="xcxcxcx"    
                                    effect="blur"
                                    src={`${movi.attributes.ImageBg.data.attributes.url}`} 
                                    style={{ width: '100%', height: 'auto' }} />
                                  
                                      </div>
                            <div className="opacity-layer"></div>
                      <div className='contentWrapper'>
                                <div className="content">
                                     <div className="left">
                                     <LazyLoadImage
                                              alt="xcxcxcx"    
                                              effect="blur"
                                              src={`${movi.attributes.Image.data.attributes.url}`} 
                                              style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                      <div className="right">
                                        <div className="title">
                                        {movi.attributes.Title}
                                        </div>
                                        <div className="row mt-10">
                                        <div className=' flex justify-center items-center'>
                                           <div className='w-[88px] h-[88px] bg-gray-800 rounded-full '>
                                                  <div className='w-[84px] h-[84px] bg-gray-800 rounded-full clecedetali '>
                                                     <Detil   className="text-white" rating={movi.attributes.Rating} />
                                                  </div>
                                                 </div>
                                           </div>

                                         <div className="playbtn"
                                           onClick={() =>setShowModal(true)}> 
                                        <PlayIcon />
                                            <span className="text">
                                             ตัวอย่าง
                                           </span>
                                          </div>
                                        </div>

                                        <div className="overview">
                                            <div className="heading">
                                                เนื้อเรื่อง
                                            </div>
                                            <div className="description">
                                            <Markdown className='text-white text-lg' >{movi.attributes.Content}</Markdown>
                                            </div>
                                        </div>

                                  
                                       {/*category,type*/}
                                      <div className='infocategory'>
                                      <ul className='text-center text-black text-lg grid max-h-96 overflow-x-auto list-episode grid-cols-2 md:grid-cols-3 lg:grid-cols-3  xl:grid-cols-4 2xl:grid-cols-4 gap-2 '>   
                                      {categorie.items.map((category,id)=>( //category
                                        <li key={id} className='bg-cyan-400 rounded-sm '>
                                              <Link href={`/category/${category.attributes.Slug}`}>
                                              {category.attributes.Title}</Link> 
                                        </li>
                                         ))} 

                                        {type.items.map((type,id)=>( //type
                                        <li key={id} className='bg-cyan-400 rounded-sm '>
                                              <Link href={`/type/${type.attributes.Slug}`}> 
                                              {type.attributes.Title}</Link> 
                                        </li>
                                         ))} 
                                      </ul>
                                      </div>
                                      {/*category,type*/}
                                        

                                      
                                            <div className="info">
                                                <span className="text bold">
                                                    ปีที่ฉาย:
                                                </span>
                                                <span className="text">
                                                        <span>
                                                         2024
                                                        </span>
                                                
                                                </span>
                                            </div>
                                   
                                       
                                            <div className="info">
                                                <span className="text bold">
                                                    คุณภาพ:
                                                </span>
                                                <span className="text">
                                                   
                                                        <span >
                                                          {movi.attributes.quality}
                                                        </span>
                                                  
                                                </span>
                                            </div>
                                            <div className="info">
                                                <span className="text bold">
                                                  เสียง:
                                                </span>
                                                <span className="text">
                                                            <span >
                                                            {movi.attributes.Sound}
                                                            </span>
                                                </span>
                                            </div>
                                      
                                    </div>
                                </div>
                           </div> 
                      </div>

                <div>
                    <div className='grid grid-cols-1 mt-12'>
                       <div className=''>
                          <div className='p-2 rounded-xl  shadow'>
                             <div className='widget mb-4 mix-bnn-widget'>
                              
                        

                                 <div>{/*ฺStart Benner*/}
                                   <div className='grid grid-cols-1 md:grid-cols-2 gap-2 [&>img]:w-full [&>img]:h-auto'>
                                 {/*image*/} 
                                   </div> 
                               </div>{/*END ฺBenner*/} 
                                <div className='mb-4'>{/*ฺStart TH*/}  
                                   <div className='flex justify-between items-center mb-2 shadow'>
                          

                                   </div>
                               </div>{/*END TH*/}
                                  <div className='main-player h-[275px] md:h-[600px] [&>iframe]:h-[271px] [&>iframe]:md:h-[589px] rounded-lg mb-2 border-2 border-sky-600'>
                                  <VideoContainer movie={isvideo}/> {/*IFARME*/}
                                  </div>  
                             </div>
                         
                        <div className={`${movi.attributes.Collection}`}>{/*DisplayNone*/}
                         {/*EP*/}<div className='grid max-h-96 overflow-x-auto list-episode grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 2xl:grid-cols-8 gap-2 mt-5 mb-5'>
                         {movie.data[0].attributes.ep.map((movie,id) =>(
                         <button  ref={id === 0 ? firstBtnRef : null}
                                 key={id}
                                 onClick={() => {
                                   setvideo({Iframe:movie.Iframe,
                                    Title:movie.Title});
                                    setSelectedTab(id);
                                }}
                                 className={`bg-cyan-400  outline-none w-full p-2 hover:bg-gray-400 rounded-sm text-cneter focus:ring-2 focus:bg-gray-400 focus:text-slate-900 ${
                                  selectedTab === id ? 'ring-2 bg-gray-400 text-black' : ''
                                } `}
                              >
                                {movie.Title}
                         </button>
                           ))}  
                         {/*EP*/}</div> 
                         </div>
                        {/*Recommended post*/} 
                        <h2 className='flex font-bold text-3xl mb-10 text-white align-center Recommended'>เรื่องที่คล้ายกัน</h2>
                        <div className='text-white  Recommended'>
                             <MovieList movies={movies.items}/>
                         </div>
                        {/*Recommended post*/}
                        </div>
                       </div>
                    </div> 
                </div>   
                  {/*setShowModal เอาวไว้ล่างสุดมันถึงจะทับทุกอัน*/} 
                  <Modul isVisible={showModal} onClose={()=> setShowModal(false)}>
                          <iframe  width="100%" height="315" src={`https://www.youtube.com/embed/${movi.attributes.Youtube}?autoplay=1&mute=1"`}
                           title="YouTube video player" frameBorder="0"                       /*${videoId}*/ 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                           allowFullScreen={true}>
                           </iframe>
                          </Modul>
                  {/*setShowModal*/}   
             </div>
    </Box>

  </Box>
  )
}

export async function getServerSideProps({query}) {
  const options = {
      populate: ['Image','gg','ep','categories','ImageBg'], // เพิ่ม Ep อย่าลืมเพิ่มตรงนี้
      sort: ['id:desc'],
      filters: {
          Slug: {
              $eq: query.movie, //queryหน้า[slug]
          },
      },
  };
const queryString = qs.stringify(options);
const resMovi= await fetch(`${process.env.API_BASE_URL}/api/movies?${queryString }`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const  movi = await resMovi.json() 

//**********************Recommended post******************************************************* 
const queryReration = qs.stringify({
  populate: ['Image',' movies'],
  sort: ['id:desc'],
  filters: { 
    movies: {
         Slug: query.movie,
     },
    },
});
const resqueryReration= await fetch(`${process.env.API_BASE_URL}/api/movies?${queryReration}`,{
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const  movies = await resqueryReration.json() 
//**********************end Recommended post******************************************************* 




//**********************Strart VideoBlog********************************************************* 
const resMovie = await fetch(`${process.env.API_BASE_URL}/api/movies?${queryString}`,{
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const movie = await resMovie.json() //part
if (movie .data.length === 0) {
  return {
      notFound: true,
  };
}
//**********************end VideoBlog*********************************************************



//********************** Categories*******************************************///
const resCategories = await fetch(`${process.env.API_BASE_URL}/api/categories?`,{
headers: { 
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
},
});
const categories = await resCategories.json()
//**********************End Categories*******************************************



//********************** Types*******************************************//
const resTypes = await fetch(`${process.env.API_BASE_URL}/api/types?`,{
headers: { //เข้า API ผ่านรหัส
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
},
});
const types = await resTypes.json() 
//**********************End types*******************************************


//********************** Titlecategory*********************************************************//
const queryTitlecategory = qs.stringify({
populate: ['Image','gg','ep','movies','Image.data.attributes'],
sort: ['id:desc'],
filters: { 
  movies: {
       Slug: query.movie,
   },
  },
});
const resTitlecategory = await fetch(`${process.env.API_BASE_URL}/api/categories?${queryTitlecategory}`,{
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
},
});
const categorie = await resTitlecategory.json() //part
//**********************end Titlecategory******************************************************* 



//********************** Titletypes*********************************************************//
const queryTitletypes = qs.stringify({
sort: ['id:desc'],
filters: { //กรองฟิล
  //ตรง reretion
  movies: {
       Slug: query.movie,
   },
  },
});
const resTitletypes= await fetch(`${process.env.API_BASE_URL}/api/types?${queryTitletypes}`,{
headers: { //เข้า API ผ่านรหัส
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
},
});
const type = await resTitletypes.json() //part
//**********************end Titletypes******************************************************* 

return {
  props: {
          movie,//ifamre
          movies: {
          items: movies.data,
          },
          categories: {
            items: categories.data,
           },
          types: {
            items: types.data,
           },
          categorie: {
            items: categorie.data,
           },
          type: {
            items: type.data,
         },
         movi: movi.data[0],
          },
        
      };
};

export default movie
