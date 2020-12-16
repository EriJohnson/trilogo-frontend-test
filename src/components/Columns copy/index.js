import './styles.less'
import { Row, Button } from 'antd'

import Ticket from '../Ticket'

function Column({ title }) {
  function verifyClassName(title) {
    const Types = {
      Executados: 'column__header--executados',
      Vistoriados: 'column__header--vistoriados',
      Arquivados: 'column__header--arquivados',
      default: 'column__header--abertos',
    }

    return Types[title] || Types.default
  }

  const typeColumn = verifyClassName(title)

  return (
    <div className='column'>
      <div className={`column__header ${typeColumn}`}>
        <span>{title}</span>
      </div>
      <div className='column__content'>
        <Ticket type='Procedimento' />
        <Ticket type='Bem' />
        <Ticket type='Predial' />
      </div>
      <Row justify='center'>
        <Button className='column__button' shape='round'>
          Carregar mais
        </Button>
      </Row>
    </div>
  )
}

export default Column
