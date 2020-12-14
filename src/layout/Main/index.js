import React from 'react'

import { Layout, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import Logo from '../../assets/logo.svg'

import Kanban from '../../components/Kanban'

const { Header, Content } = Layout

const Main = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className='header' style={{ padding: '0 60px' }}>
        <div>
          <img src={Logo} alt='Logo da trílogo' />
        </div>
        <div>
          <Button
            type='primary'
            size='large'
            shape='round'
            icon={<PlusOutlined />}
          >
            Novo ticket
          </Button>
        </div>
      </Header>
      <Content
        style={{
          padding: '16px 60px',
          height: '100%',
          background: '#E5E5E5',
          overflow: 'auto',
        }}
      >
        <Kanban />
      </Content>
    </Layout>
  )
}

export default Main
