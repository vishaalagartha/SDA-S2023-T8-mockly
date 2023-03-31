/* eslint-disable */
import { Layout, Menu, Typography, Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { useDispatch } from 'react-redux'
import { setUser } from '../store/userSlice'

const items = [
  { key: '1', label: 'Profile' },
  { key: '2', label: 'Interview History' },
]

const Header = ({ children }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = (e) => {
    const { key } = e
    switch (key) {
      case '1':
        navigate('/profile')
        break
      case '2':
        navigate('/feedback')
        break
    }
  }

  const handleLogout = () => {
    dispatch(setUser())
    navigate('/login')
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider collapsible>
        <Menu theme="dark" mode="inline" items={items} onClick={handleClick} />
      </Layout.Sider>
      <Layout className="site-layout">
        <Layout.Header
          style={{
            paddingLeft: 10,
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <LinkContainer to="/dashboard" style={{ cursor: 'pointer', paddingLeft: 10 }}>
            <Image src={null} preview={false} width={300} />
          </LinkContainer>
          <LinkContainer to="/" onClick={handleLogout}>
            <Typography.Text role="button">Logout</Typography.Text>
          </LinkContainer>
        </Layout.Header>
        <Layout.Content>{children}</Layout.Content>
      </Layout>
    </Layout>
  )
}

export default Header
