const ticketsTypes = ['Bem', 'Predial', 'Procedimento']
const assignees = ['Priscila Alcântara', 'Yudi Tadashiro']

let uniqueId = 6523
function getItems(count) {
  return Array.from({ length: count }, (v, k) => {
    const id = uniqueId++
    const randomType = Math.floor(Math.random() * ticketsTypes.length)
    const typeChosen = ticketsTypes[randomType]
    const randomAssignee = Math.floor(Math.random() * assignees.length)
    const assigneeChosen = assignees[randomAssignee]
    return {
      id: `${id}`,
      text: `item ${id}`,
      type: typeChosen,
      description: `lorem ipsum... ${id} `,
      assignee: assigneeChosen,
    }
  })
}

const initial = {
  columns: {
    'column-0': {
      id: 'column-0',
      title: 'Abertos',
      items: getItems(3),
    },
    'column-1': {
      id: 'column-1',
      title: 'Executados',
      items: getItems(4),
    },
    'column-2': {
      id: 'column-2',
      title: 'Vistoriados',
      items: getItems(2),
    },
    'column-3': {
      id: 'column-3',
      title: 'Arquivados',
      items: getItems(1),
    },
  },
  columnOrder: ['column-0', 'column-1', 'column-2', 'column-3'],
}

export default function getInitialData() {
  return initial
}
