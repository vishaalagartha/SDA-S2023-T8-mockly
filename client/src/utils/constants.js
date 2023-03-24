import { ClusterOutlined, ForkOutlined, DatabaseOutlined, CodeOutlined, CodepenOutlined, CommentOutlined } from '@ant-design/icons'

const fieldMapping = {
  DATA_STRUCTURES_ALGORITHMS: { string: 'Data Structures and Algorithms', icon: <ClusterOutlined /> },
  SYSTEM_DESIGN: { string: 'System Design', icon: <ForkOutlined /> },
  DATA_SCIENCE: { string: 'Data Design', icon: <DatabaseOutlined /> },
  FRONTEND: { string: 'Frontend', icon: <CodeOutlined /> },
  BACKEND: { string: 'Backend', icon:<CodepenOutlined /> },
  BEHAVIORAL: { string: 'Behavioral', icon: <CommentOutlined /> },
}

export { fieldMapping }