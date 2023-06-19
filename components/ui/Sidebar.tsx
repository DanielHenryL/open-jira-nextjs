import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material"
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { UIContext } from "@/context/ui";
import { useContext } from "react";
const menuItems:string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts'] 

export const Sidebar = () => {
    const {sidemenuOpen,closeSideMenu } = useContext( UIContext)
  return (
    <Drawer
        anchor="left"
        open={sidemenuOpen}
        onClose={closeSideMenu}
    >
        <Box sx={{ width:200}}>
            <Box sx={{ padding:'5px 10px'}}>
                <Typography variant="h4">Menú</Typography>
            </Box>
            <Divider/>
            <List>
                {
                    menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlinedIcon/>: <EmailOutlinedIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))
                }
            </List>
            <Divider/>
            <List>
                {
                    menuItems.map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                { index % 2 ? <InboxOutlinedIcon/>: <EmailOutlinedIcon/>}
                            </ListItemIcon>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    </Drawer>
  )
}
