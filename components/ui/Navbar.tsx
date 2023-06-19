import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from "@/context/ui";
import { useContext } from 'react'
export const Navbar = () => {
  const {openSideMenu} = useContext(UIContext)
  return (
    <AppBar position="sticky">
        <Toolbar>
            <IconButton 
                size="medium"
                edge='start'
                color="inherit"
                onClick={openSideMenu}
            >
                <MenuOutlinedIcon/>
            </IconButton>
            <Typography variant="h6">OpneJira</Typography>
        </Toolbar>
    </AppBar>
  )
}
