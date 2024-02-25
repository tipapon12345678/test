import React from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link'



const SetHeader = ({categories,types}) => {
   

   const router = useRouter();

   const isActiveLink = (category) => {
       return category.attributes.Slug === router.query.category;
   };

   const isActiveType = (type) => {
      return type.attributes.Slug === router.query.type;
  };


  return (
    <nav className='nav'>
    <div className='logo'>
  {/** LOGO */}
    </div>
    <div  className='linksContainer'>
    <Link href='/' className={ 
               '' + 
               `${
                  router.pathname === '/'
                       ? ' active'
                       : 'link__title'
               }`
           }>
                  <span className=' inline-flex flex-row items-center justify-center text-xs link__icon'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                   <path fill="none" d="M0 0h24v24H0z"></path><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                   <span className=' link__title '>หน้าหลัก</span>
               </span>
            </Link>
           
            <Link href='/search'  className={ 
               '' + 
               `${
                  router.pathname === '/search'
                       ? ' active'
                       : 'link__title'
               }`
           }>
                  <span className=' inline-flex flex-row items-center justify-center text-xs link__icon'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
                  <span className=' link__title '>ค้นหา</span>
               </span>
            </Link>
           
           {/***Category */}
            {/***types */}
          <Link href='/' className='h-auto w-auto  '>
                  <span className=' inline-flex flex-row items-center justify-center text-xs link__icon text-white'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"></path></svg>
                  <span className=' link__title'>หมวดหมู่</span>
               </span>
            </Link>
         
            {categories.map((category)=>(
            <Link key={category.id} href={`/category/${category.attributes.Slug}`} className={ 
               '' + 
               `${
                   isActiveLink(category)
                       ? ' active'
                       : 'link__title'
               }`
           }>
                  <span  className=' inline-flex flex-row items-center justify-center text-xs link__icon'>
                  <svg viewBox="0 0 512 512" fill="currentColor" width="0.5em" >
                     <path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z">
                     </path></svg>
                  <span className='link__title'> {category.attributes.Title}</span>
               </span>
            </Link>
            ))}
          {/***Category */}
    
          {/***types */}
          <Link href='/' className='h-auto w-auto  text-white'>
                  <span className=' inline-flex flex-row items-center justify-center text-xs link__icon text-white'>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"></path></svg>
                  <span className=' link__title'>ประเภทหนัง</span>
               </span>
            </Link>
            {types.map((type)=>(
            <Link key={type.id} href={`/type/${type.attributes.Slug}`} className={ 
               '' + 
               `${
                  isActiveType(type)
                       ? 'text-cyan-400 active'
                       : ' link__title'
               }`
           }>
                  <span  className=' inline-flex flex-row items-center justify-center text-xs link__icon '>
                  <svg viewBox="0 0 512 512" fill="currentColor" width="0.5em" >
                     <path d="M256 56c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 168c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80z">
                     </path></svg>
                  <span className=' link__title '> {type.attributes.Title}</span>
               </span>
            </Link>
            ))}
          {/***types */}
     </div >

     </nav>
  )
}

export default SetHeader
