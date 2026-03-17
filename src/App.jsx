import { BrowserRouter, Routes, Route } from 'react-router'

import { Header } from './common/header'
import { Bar } from './common/Bar'
import { AboutMe } from './AboutMe'
import { Skills } from './Skills'
import { Projects } from './Projects'

import './style/colors.css'
import './style/common.css'

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Bar/>
      <Routes>
        <Route path="marta-gomez-web-portfolio/" element={<AboutMe />} />
        <Route path="marta-gomez-web-portfolio/projects" element={<Projects />} />
        <Route path="marta-gomez-web-portfolio/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
