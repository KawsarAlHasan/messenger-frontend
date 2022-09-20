import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="messenger/login" element={<Login />} />
        <Route path="messenger/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App
