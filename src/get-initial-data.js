let uniqueId = 0
function getItems(count) {
  return Array.from({ length: count }, (v, k) => {
    const id = uniqueId++
    return {
      id: `id:${id}`,
      text: `item ${id}`,
      type: `Predial ${id}`,
      description: `lorem ipsum... ${id} `,
      assignee: `fulano ${id}`,
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
