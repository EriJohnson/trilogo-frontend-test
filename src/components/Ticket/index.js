import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { areEqual } from 'react-window'
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

function getStyle({ draggableStyle, virtualStyle, isDragging }) {
  // If you don't want any spacing between your items
  // then you could just return this.
  // I do a little bit of magic to have some nice visual space
  // between the row items
  const combined = {
    ...virtualStyle,
    ...draggableStyle,
  }

  // Being lazy: this is defined in our css file
  const grid = 8

  // when dragging we want to use the draggable style for placement, otherwise use the virtual style
  const result = {
    ...combined,
    height: isDragging ? combined.height : combined.height - grid,
    left: isDragging ? combined.left : combined.left + grid,
    width: isDragging
      ? draggableStyle.width
      : `calc(${combined.width} - ${grid * 2}px)`,
    // marginBottom: grid,
  }

  return result
}

function Item({ provided, item, style, isDragging }) {
  return (
    <div
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
      style={getStyle({
        draggableStyle: provided.draggableProps.style,
        virtualStyle: style,
        isDragging,
      })}
      className={`item ${isDragging ? 'is-dragging' : ''}`}
    >
      <div className='ticket'>
        <div className='ticket__header'>
          <Badge
            count={item.type}
            style={{
              backgroundColor: '#CAD1EB',
              color: '#1F1F49',
              fontSize: 12,
              paddingLeft: 10,
              paddingRight: 10,
              boxShadow: 'none',
            }}
          />
        </div>
        <div className='ticket__content'>
          <div>
            <span className='number'>{item.id}</span>
          </div>

          <div>
            <span className='description'>{item.description}</span>
          </div>
        </div>
        <div className='ticket__footer'>
          <div>
            <span className='assignee'>{item.assignee}</span>
          </div>
          <div>
            <Dropdown
              overlay={menu}
              placement={'bottomCenter'}
              trigger={['click']}
            >
              <button className='ticket__button'>
                <img src={TicketLogo} alt='Menu do ticket' />
              </button>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  )
}

// Recommended react-window performance optimisation: memoize the row render function
// Things are still pretty fast without this, but I am a sucker for making things faster
const Row = React.memo(function Row(props) {
  const { data: items, index, style } = props
  const item = items[index]

  // We are rendering an extra item for the placeholder
  if (!item) {
    return null
  }

  return (
    <Draggable draggableId={item.id} index={index} key={item.id}>
      {provided => <Item provided={provided} item={item} style={style} />}
    </Draggable>
  )
}, areEqual)

export { Item, Row }
