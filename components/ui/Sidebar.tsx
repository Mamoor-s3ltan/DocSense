import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import TryIcon from '@mui/icons-material/Try';
import Link from 'next/link';
import DocumentsPage from '@/app/dashboard/documents/page';

const drawerWidth = 240;

export default function SideBar() {
    const data =[
        {name:"Documents",icon:<DocumentScannerIcon/>,link:"/dashboard/documents"},
        {name:"Chat",icon:<TryIcon/>,link:"/dashboard/chat"},
    ]
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {data.map((text, index) => (
            <ListItem key={text.name} disablePadding>
             <Link href={text.link}> 
             <ListItemButton>
                <ListItemIcon>
                  {text.icon}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Divider />
        
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
          <DocumentsPage/>
      </Box>
    </Box>
  );
}