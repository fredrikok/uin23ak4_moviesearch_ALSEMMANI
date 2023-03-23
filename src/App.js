//laget ny komponent så det ikke oppstår problemer når man bruker router. 
//Alle hovedsidene ligger i mappen pages så KUN f.eks Homepage rendres ut og ikke singlemoviepage render med denne. Hvis det gir mening 🤣
import React from 'react'
//react router 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import OneMovie from './Components/OneMovie';
import HomePage from './pages/HomePage';



function App() {
  return (
    <Router> 
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/:slug" element={<OneMovie />} />
      </Routes>
    </Router>

  )
}

export default App