import { Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'

const items = [
  { key: '1', label: 'Profile' },
  { key: '2', label: 'Interview History' },
  { key: '3', label: 'Meeting Schedule' },
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
      case '3':
        navigate('/schedule')
        break
    }
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header
        style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}
      >
        <Menu
          theme='dark'
          mode='horizontal'
          items={items}
          onClick={handleClick}
        />
      </Layout.Header>
      <Layout.Content style={{ margin: '24px 16px 0' }}>
        {children}
      </Layout.Content>
    </Layout>
  )
}

export default Header
