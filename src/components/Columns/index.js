import React, { useLayoutEffect, useRef } from 'react'

import { FixedSizeList } from 'react-window'

import 'react-virtualized/styles.css'

import { Droppable, Draggable } from 'react-beautiful-dnd'
import './styles.less'

import { Item, Row } from '../Ticket'

const ItemList = React.memo(function ItemList({ column, index }) {
  // There is an issue I have noticed with react-window that when reordered
  // react-window sets the scroll back to 0 but does not update the UI
  // I should raise an issue for this.
  // As a work around I am resetting the scroll to 0
  // on any list that changes it's index
  const listRef = useRef()
  useLayoutEffect(() => {
    const list = listRef.current
    if (list) {
      list.scrollTo(0)
    }
  }, [index])

  return (
    <Droppable
      droppableId={column.id}
      mode='virtual'
      renderClone={(provided, snapshot, rubric) => (
        <Item
          provided={provided}
          isDragging={snapshot.isDragging}
          item={column.items[rubric.source.index]}
        />
      )}
    >
      {(provided, snapshot) => {
        // Add an extra item to our list to make space for a dragging item
        // Usually the DroppableProvided.placeholder does this, but that won't
        // work in a virtual list
        const itemCount = snapshot.isUsingPlaceholder
          ? column.items.length + 1
          : column.items.length

        return (
          <div>
            <FixedSizeList
              height={592}
              itemCount={itemCount}
              itemSize={146}
              width={'100%'}
              className={'task-list'}
              outerRef={provided.innerRef}
              itemData={column.items}
              ref={listRef}
            >
              {Row}
            </FixedSizeList>
          </div>
        )
      }}
    </Droppable>
  )
})

const Column = React.memo(function Column({ column, index }) {
  function verifyClassName(title) {
    const Types = {
      Executados: 'column__header--executados',
      Vistoriados: 'column__header--vistoriados',
      Arquivados: 'column__header--arquivados',
      default: 'column__header--abertos',
    }

    return Types[title] || Types.default
  }

  const typeColumn = verifyClassName(column.title)

  return (
    <Draggable draggableId={column.id} index={index}>
      {provided => (
        <div
          className='column'
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className={`column__header ${typeColumn}`}>
            <span>{column.title}</span>
          </div>

          <div className='column__content'>
            <ItemList column={column} index={index} />
          </div>
        </div>
      )}
    </Draggable>
  )
})

export { Column, ItemList }
