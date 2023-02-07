import { SxProps, Theme } from '@mui/material'

export const Layout: SxProps<Theme> = {
  display: {
    md: 'flex'
  },
  '& main': {
    flex: 1,
    p: 3,
    '& h1': {
      mb: 3
    }
  }
}
