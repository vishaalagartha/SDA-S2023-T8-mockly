import { Layout, Menu, Button, Image } from 'antd'
import { useNavigate } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import Logo from '../assets/logo.png'

const items = [
  { key: '1', label: 'Profile' },
  { key: '2', label: 'Interview History' },
]

const Header = ({ children }) => {
  const navigate = useNavigate()

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
    localStorage.removeItem('token')
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
            backgroundColor: '#35185A',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <LinkContainer to="/dashboard">
            <Image src={Logo} width={200} preview={false} />
          </LinkContainer>
          <LinkContainer to="/" onClick={handleLogout}>
            <Button type="link">
              <div style={{ color: 'white' }}>
                Logout
              </div>
            </Button>
          </LinkContainer>
        </Layout.Header>
        <Layout.Content className="m-5">{children}</Layout.Content>
      </Layout>
    </Layout>
  )
}

export default Header
