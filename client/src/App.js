import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landing'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardPage from './pages/Dashboard'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path='/login' element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
