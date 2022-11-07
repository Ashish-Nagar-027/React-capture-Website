// import global style
import GlobalStyle from './Components/GlobalStyle'

// Components
import AboutUs from './Pages/AboutUs'
import Nav from './Components/Nav'
import OurWork from './pages/OurWork'
import ContactUs from './pages/Contact'
import {
  Routes,
  Route, useLocation
} from "react-router-dom";

import MovieDetail from './pages/MovieDetail'
// Animation
import { AnimatePresence } from 'framer-motion'


function App() {

  const location = useLocation()

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence wait>
      <Routes location={ location } key={location.pathname} >
          <Route path='/React-capture-Website' element={  <AboutUs /> } />
          <Route path='/React-capture-Website/work' element={ <OurWork /> } />
          <Route path='/React-capture-Website/work/:id' element={ <MovieDetail /> } />
          <Route path='/React-capture-Website/contact' element={ <ContactUs  /> } />
      </Routes>
      </AnimatePresence>
     
    </div>
  )
}

export default App
