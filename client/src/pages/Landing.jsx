import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Card, Row, Form, Space, Typography, Input, Button } from 'antd'
import { useForm } from 'antd/es/form/Form'

const Landing = () => {
  const [form] = useForm()


  const handleLogin = async (e) => {
    console.log(e)
  }

  const handleRegister = async (e) => {
    console.log(e)
  }

  const handleEnter = (e) => e.keyCode === 13 && handleLogin(e)

  return (
    <Space
      direction="vertical"
      size="middle"
      align="center"
      style={{ width: '100%', marginTop: '5rem' }}>
        <Card style={{ width: 800 }}>
          <Row justify="center">
            <Typography.Title level={1}>Welcome!</Typography.Title>
          </Row>
          <Row justify="center">
            <Typography.Title level={2}>Let&lsquo;s get started.</Typography.Title>
          </Row>
          <Form form={form} onFinish={handleLogin} onKeyUp={handleEnter}>
            <Row justify="center">
              <Form.Item
                name="andrewId"
                rules={[{ required: true, message: 'Please input a Andrew ID!' }]}>
                <Input prefix={<UserOutlined />} placeholder="Andrew ID" />
              </Form.Item>
            </Row>
            <Row justify="center">
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input a Password!' }]}>
                <Input.Password prefix={<LockOutlined />} placeholder="Password" />
              </Form.Item>
            </Row>
            <Row justify="center">
              <Form.Item>
                <Button onClick={handleLogin} type="primary">
                  Log in
                </Button>
              </Form.Item>
            </Row>
            <Row justify="center">
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
