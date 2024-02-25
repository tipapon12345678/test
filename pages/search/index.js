import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {debounce } from '../../utils';
import qs from 'qs'
import Tabs from '@/components/Tabs';
import SetHeader from '@/components/SetHeader';
import { useRouter } from 'next/router';

const drawerWidth = 240;

const index = ({movies,categories,types}) => {

  
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
  


    const router = useRouter();
    const handleSearch = (query) => {
        //กลับไปยังตำเเหน่งเเรกที่ค้นหา
    router.push(`/search?search=${query}`);

    };  
  return (
    <>
    <Box sx={{ display: 'flex' }} className='NavBar'>
    <CssBaseline />
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
    <div className='Navbar'>
      <Toolbar className='flex justify-between '>
        <Typography variant="h6" noWrap component="div">
         Responsive drawer
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

      <div className='text-white  '>
      <Tabs movies={movies.items}  handleOnSearch={debounce(handleSearch, 500)}/> 
      </div>

    
    </Box>

  </Box>
  </>
  )
}

export async function getServerSideProps({query}) {
 
  //setdelytime  
  {/*  
    await new Promise ((resolve) =>{
        setTimeout(resolve,200);
   }); 
*/} 
  
    //setdelytime  
    const options = {
        populate: ['Image'],
        sort: ['id:desc'],
        filters: { //กรองฟิล เอา IsFeatured $eq: true
          Poppulate: {
                $eq: true,
            },
            
        },
      };
      
      if (query.search) {
        options.filters = {
          Title: {
                $containsi: query.search,
              
            },
        };
      }
     
  const queryString = qs.stringify(options);
  
  const resMovies = await fetch(`${process.env.API_BASE_URL}/api/movies?${queryString}`,{
    headers: { //เข้า API ผ่านรหัส
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
    },
   
  });
  const movies = await resMovies.json()

//********************** Categories*******************************************///
const resCategories = await fetch(`${process.env.API_BASE_URL}/api/categories?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const categories = await resCategories.json() //categories
//**********************End Categories*******************************************

//********************** Types*******************************************//
const resTypes = await fetch(`${process.env.API_BASE_URL}/api/types?`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
});
const types = await resTypes.json() //part
//**********************End types*******************************************

  
  return {
    props: {
      movies: {
            items: movies.data,
            pagination: movies.meta.pagination,
             },
             categories: {
              items: categories.data,
              
          }, 
          types: {
            items: types.data,
        },      
           },
        };
  };

export default index
