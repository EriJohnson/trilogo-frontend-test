import './styles.less'
import { Badge, Menu, Dropdown, message } from 'antd'

import TicketLogo from '../../assets/ticket-menu.svg'

function handleMenuClick(e) {
  message.info('Click on menu item.')
  console.log('click', e)
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key='1'>Editar</Menu.Item>
    <Menu.Item key='2'>Excluir</Menu.Item>
  </Menu>
)

const Ticket = ({ type }) => {
  return (
    <div className='ticket'>
      <div className='ticket__header'>
        <Badge
          count={type}
          style={{
            backgroundColor: '#CAD1EB',
            color: '#1F1F49',
            fontSize: 12,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        />
      </div>
      <div className='ticket__content'>
        <div>
          <span className='number'>53876</span>
        </div>

        <div>
          <span className='description'>Consertar chuveiro...</span>
        </div>
      </div>
      <div className='ticket__footer'>
        <div>
          <span className='assignee'>Yudi Tamashiro</span>
        </div>
        <div>
          <Dropdown
            overlay={menu}
            placement={'bottomCenter'}
            trigger={['click']}
          >
            <img src={TicketLogo} alt='Menu do ticket' />
          </Dropdown>
        </div>
      </div>
    </div>
  )
}

export default Ticket
