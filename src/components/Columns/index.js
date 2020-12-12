import './styles.less'

function Column(props) {
  const title = props.title
  console.log('title', title)

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

  console.log(typeColumn)

  return (
    <div className='column'>
      <div className={`column__header ${typeColumn}`}>
        <span>{props.title}</span>
      </div>
    </div>
  )
}

export default Column
