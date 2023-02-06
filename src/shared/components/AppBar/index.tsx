import { useEffect, useState } from 'react'
import { AppBar as MUIAppBar, Divider, IconButton, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material'
import { Menu, MenuOpen } from '@mui/icons-material'
import { Nav } from './Nav'
import * as S from './style'

export const AppBar: React.FC = () => {
  const theme = useTheme()
  const md = useMediaQuery(theme.breakpoints.up('md'))

  const [ open, setOpen ] = useState(md)

  useEffect(() => {
    setOpen(md)
  }, [md])
  
  const handleOpen = () => setOpen(open => !open)
  
  const MenuIcon = !open ? Menu : MenuOpen

  return (
    <MUIAppBar sx={S.AppBar}>
      <Toolbar>
        <IconButton 
          className="icon-button" size="large" edge="start" role="menu"
          onClick={handleOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Supermercado Baratão
        </Typography>
      </Toolbar>
      <Divider />
      {open && <Nav />}
    </MUIAppBar>
  )
}
