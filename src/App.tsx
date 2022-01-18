import './App.css'

import { ThemeProvider, createTheme } from '@material-ui/core'
import { Container } from '@material-ui/core'
import { Nav } from './components/Nav'
import { About } from './sections/About'
import { FAQ } from './sections/FAQ'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Roadmap } from './sections/Roadmap'
import { Team } from './sections/Team'

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
        <Nav />
        <Hero />

        <Container maxWidth="md">
          <About />
          <Roadmap />
          <FAQ />
          <Team />
        </Container>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export default App
