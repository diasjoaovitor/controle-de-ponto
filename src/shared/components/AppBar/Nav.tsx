import { Link } from 'react-router-dom'
import { Box, Link as MUILink } from '@mui/material'
import { GitHub } from '@mui/icons-material'
import { navItens } from './nav-itens'
import * as S from './style'

export const Nav: React.FC= () => (
  <Box component="nav" sx={{ ...S.Nav }}>
    <Box>
      {navItens.map(({ name, icon: Icon, to }) => (
        <Link to={to} key={name}> 
          <Icon />
          {name}
        </Link>
      ))}
    </Box>
    <MUILink href="https://github.com/diasjoaovitor" target="_blank">
      <GitHub />
      Criado por João Vitor
    </MUILink>
  </Box>
)
