
import Grid from "@mui/material/Unstable_Grid2"
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import { Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider,  } from "@mui/material";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const Menu = () => {

  return (
    <>
      <Grid container columns={15} columnSpacing={6}>
        <Grid className="sidebar break-words" md={3}>
          <Drawer 
            className="filter-sort" 
            variant="persistent" 
            anchor="left" 
            open={true}
            sx={{
              position: "static",
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                position: "static"
              },
            }}
          >
            <List>
              {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
            </List>
          </Drawer>
        </Grid>

        <Grid className="bg-green-900 px-5" md={12} sx={{ flexGrow: 1,  p: 3 }}>
          
        </Grid>
      </Grid>
    </>
  );
}

export default Menu;