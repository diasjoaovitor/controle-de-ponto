import { createContext, ReactNode, useContext } from 'react'
import { Box, createTheme, CssBaseline, SxProps, Theme, ThemeProvider as MUIThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#1e1e1e'
    }
  }
})

const style: SxProps<Theme> = {
  width: '100vw', 
  height: '100vh', 
  display: 'flex', 
  flexDirection: 'column' 
}

type Props = {
  children: ReactNode
}

type TThemeContext = {
  theme: Theme
}

const ThemeContext = createContext({} as TThemeContext)

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const bgcolor = theme.palette.background.default
  
  return (
    <ThemeContext.Provider value={{ theme }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ ...style, bgcolor }}>
          {children}
        </Box>
      </MUIThemeProvider>
    </ThemeContext.Provider>
  )
}
