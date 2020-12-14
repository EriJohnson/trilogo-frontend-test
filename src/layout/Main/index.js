import React from 'react'

import { Layout } from 'antd'

import Logo from '../../assets/logo.svg'

import Kanban from '../../components/Kanban'
import NewTicket from '../../components/NewTicket'

const { Header, Content } = Layout

const Main = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className='header' style={{ padding: '0 60px' }}>
        <div>
          <img src={Logo} alt='Logo da trílogo' />
        </div>
        <div>
          <NewTicket />
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
