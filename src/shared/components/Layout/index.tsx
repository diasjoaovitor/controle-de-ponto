import { ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import { AppBar } from '..'
import * as S from './style'

type Props = {
  page: string
  children: ReactNode
}

export const Layout: React.FC<Props> = ({ page, children }) => (
  <Box sx={S.Layout}>
    <AppBar />
    <Box component="main">
      <Typography component="h1" variant="h5">
        {page}
      </Typography>
      {children}
    </Box>
  </Box>
) 
