import { useNavigate } from 'react-router-dom'
import Header from './Header'

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  // const uid = localStorage.getItem('uid')
  const navigate = useNavigate()
  if (!token) {
    navigate('/landing')
  }

  return <Header>{children}</Header>
}

export default ProtectedRoute
