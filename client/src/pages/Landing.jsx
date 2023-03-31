import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Row, Form, Space, Typography, Input, Button } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { useNavigate } from 'react-router-dom'
import request from '../utils/request'

const Landing = () => {
  const [form] = useForm()
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const values = await form.validateFields()
      const res = await request('login', {
        method: 'POST',
        body: JSON.stringify(values),
      })
      console.log('Login: ', res)
      if (!res.status) {
        const { token, userId } = res
        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleRegister = async () => {
    try {
      const values = await form.validateFields()
      const res = await request('register', {
        method: 'POST',
        body: JSON.stringify(values),
      })
      console.log('Register: ', res)
      if (!res.status) {
        const { token, userId } = res
        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleEnter = (e) => e.keyCode === 13 && handleLogin(e)

  return (
    <Space
      direction='vertical'
      size='middle'
      align='center'
      style={{ width: '100%', marginTop: '5rem' }}
    >
      <Card style={{ width: 800 }}>
        <Row justify='center'>
          <Typography.Title level={1}>Welcome!</Typography.Title>
        </Row>
        <Row justify='center'>
          <Typography.Title level={2}>
            Let&lsquo;s get started.
          </Typography.Title>
        </Row>
        <Form form={form} onKeyUp={handleEnter}>
          <Row justify='center'>
            <Form.Item
              name='andrewId'
              rules={[{ required: true, message: 'Please input a Andrew ID!' }]}
            >
              <Input prefix={<UserOutlined />} placeholder='Andrew ID' />
            </Form.Item>
          </Row>
          <Row justify='center'>
            <Form.Item
              name='password'
              rules={[{ required: true, message: 'Please input a Password!' }]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder='Password'
              />
            </Form.Item>
          </Row>
          <Row justify='center'>
            <Form.Item>
              <Button onClick={handleLogin} type='primary'>
                Log in
              </Button>
            </Form.Item>
          </Row>
          <Row justify='center'>
            <Form.Item>
              <Button onClick={handleRegister}>Register Now!</Button>
            </Form.Item>
          </Row>
        </Form>
      </Card>
    </Space>
  )
}

export default Landing
