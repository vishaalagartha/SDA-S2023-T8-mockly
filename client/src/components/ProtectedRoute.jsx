import { useNavigate } from 'react-router-dom'
import Header from './Header'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  if (!token) {
    navigate('/login')
  }

  return <Header>{children}</Header>
}

export default ProtectedRoute
