import { Route, Routes } from 'react-router-dom'
import PlayGame from './pages/PlayGame'
import Home from './pages/Home'


function App() {
  return (
 <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/play' element={<PlayGame />} />
      </Routes>
  )
}

export default App 