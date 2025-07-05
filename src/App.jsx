import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './style.css'
import Home from './pages/Home'
import Gacha from './pages/Gacha'
import Result from './pages/Result'
import { ROUTES } from './const'
import MyPage from './pages/MyPage'
import { useState } from 'react'

function App() {
  const [ownedCharacters, setOwnedCharacters] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.GACHA} element={<Gacha ownedCharacters={ownedCharacters} setOwnedCharacters={setOwnedCharacters} />} />
        <Route path={ROUTES.RESULT} element={<Result />} />
        <Route path={ROUTES.MYPAGE} element={<MyPage ownedCharacters={ownedCharacters} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
