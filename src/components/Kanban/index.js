import React from 'react'
import Column from '../Columns'

import './styles.less'

const Kanban = () => {
  return (
    <div className='kanban-container'>
      <Column title='Abertos' />
      <Column title='Executados' />
      <Column title='Vistoriados' />
      <Column title='Arquivados' />
    </div>
  )
}

export default Kanban
