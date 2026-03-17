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
        <Route path="/" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
