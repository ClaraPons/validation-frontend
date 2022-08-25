import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'

import Users from './pages/Users'
import User from './pages/User'
import Formulaire from './pages/Formulaire'

const App = () => {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path='/' element={<Users/>}/>
        <Route path='/:slug' element={<User/>}/>
        <Route path='/formulaire' element={<Formulaire/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
