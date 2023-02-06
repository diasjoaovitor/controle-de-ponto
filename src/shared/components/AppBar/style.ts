import { SxProps, Theme } from '@mui/material'

export const AppBar: SxProps<Theme> = {
  position: 'static',
  height: {
    md: '100vh'
  },
  width: {
    md: 260
  },
  '& .icon-button': {
    display: {
      md: 'none'
    }
  }
}

export const Nav: SxProps<Theme> = {
  px: 3,
  py: 2,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: 2,
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    display: 'flex',
    gap: 1
  }
}
