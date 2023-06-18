import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const Navbar = () => {
  return (
    <AppBar position="sticky">
        <Toolbar>
            <IconButton 
                size="medium"
                edge='start'
                color="inherit"
            >
                <MenuOutlinedIcon/>
            </IconButton>
            <Typography variant="h6">OpneJira</Typography>
        </Toolbar>
    </AppBar>
  )
}
