import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SetHeader from './SetHeader';
import Link from 'next/link';

const drawerWidth = 240;
const SideMenu = ({movies}) => {


console.log(movies)

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


  // Remove this const when copying and pasting into your project.
  

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
        <Toolbar className='flex justify-between'>
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
         <SetHeader/>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
        <SetHeader/>
        </Drawer>
      </Box>
      <Box className='bg-black text-we'
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <div className='text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
       
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
   
        </div>

        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
       
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
   
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
       
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
   
        </div>
      </Box>
    </Box>
  );
}

SideMenu.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};




export default SideMenu;

