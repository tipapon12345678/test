import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import qs from 'qs'
import MovieList from '@/components/MovieList';
import SetHeader from '@/components/SetHeader';
import Pagination from '@/components/Pagination';
import { useRouter } from 'next/router';
import Head from 'next/head';

const drawerWidth = 240;

const type = ({movies,categories,types,type}) => {
  
  const { page, pageCount } = movies.pagination;
  const router = useRouter();
  const { type: typeSlug } = router.query;

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
    <>
      
 <Head>
  <title>{type.data[0].attributes.Title}</title>
  <meta name="description" content='xcxcxcxcxcxx' />
  <meta name="keywords" content='xcxcxcxc'/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  </Head>


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
      <Box className=' text-we customfont'
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <h2 className='flex font-bold text-3xl mb-10 text-white align-center'> {type.data[0].attributes.Title}</h2>
        <div className='text-white  '>
        <MovieList movies={movies.items}/>
        </div>
        
        <div className='mt-10 text-white'>
        <Pagination page={page} 
        pageCount={pageCount} 
        redirectUrl={`/type/${typeSlug}`} />  
        </div>
      </Box>

    </Box>
 
  </>
  )
}

export async function getServerSideProps({query}) {
    const options = {
        populate: ['Image','category.dataz'],
        sort: ['id:desc'],
        filters: { //กรองฟิล
        //ตรง reretion
        types: {
            // Slug ในหน้าCategory ตามค่า Strapi ที่เราตั้งชื่อไว้ ดูด้วยว่าเป็นตัวพิมเล็กหรือพิมใหญ่
               Slug: query.type,//queryหน้า[category] กับใส่ ตรง reretion ใหเหมือนกัน ในกรณีต้องการมีหลายหมวดหมู่
           },
        },
        pagination: {
            page: query.page ? +query.page : 1,
             pageSize: 25,
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


 //**********************Strat Titletype*********************************************** 

 const queryCategory = qs.stringify({
    populate: ['Image', 'author.avatar'],
    sort: ['id:desc'],
    filters: { //กรองฟิล
    //ตรง Slug Strapi
      Slug: {
        $eq: query.type, //queryหน้า[category]
    }
      },
  });
  
  const resTitle = await fetch(`${process.env.API_BASE_URL}/api/types?${queryCategory}`,{
  headers: { //เข้า API ผ่านรหัส
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.BACKEND_API_KEY}`  
  },
  });
  const type = await resTitle.json() //part
  //**********************end Titletype***********************************************

  return {
    props: {type,
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

export default type
