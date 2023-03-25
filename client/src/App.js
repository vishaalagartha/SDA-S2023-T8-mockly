import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/Landing'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardPage from './pages/Dashboard'
import ProfilePage from './pages/Profile'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/profile'
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route path='/login' element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
