import { AppBar, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { UIContext } from "@/context/ui";
import { useContext } from 'react'
import NextLink from "next/link";
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
            <NextLink href={'/'} passHref legacyBehavior>
              <Link underline="none" color={'white'}>
                <Typography variant="h6">OpneJira</Typography>
              </Link>
            </NextLink>
        </Toolbar>
    </AppBar>
  )
}
