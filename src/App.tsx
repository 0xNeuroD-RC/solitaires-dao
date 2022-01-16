import './App.css'

import { ThemeProvider, createTheme } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { Splash } from './components/Splash'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#c29947'
    },
    secondary: {
      main: '#101d2c'
    },
    text: {
      primary: '#fff'
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Splash />
      </Container>
    </ThemeProvider>
  )
}

export default App
