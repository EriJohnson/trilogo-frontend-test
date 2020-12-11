import { Layout, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import Logo from './assets/logo.svg'

import './App.less'

const { Header, Content } = Layout

function App() {
  return (
    <div className='App'>
      <Layout>
        <Header className='header' style={{ padding: '0 60px' }}>
          <img src={Logo} alt='Logo da trílogo' />
          <Button
            type='primary'
            size='large'
            shape='round'
            icon={<PlusOutlined />}
          >
            Novo ticket
          </Button>
        </Header>
        <Content
          style={{
            padding: '16px 60px',
            height: '100%',
            background: '#E5E5E5',
          }}
        ></Content>
      </Layout>
    </div>
  )
}

export default App
