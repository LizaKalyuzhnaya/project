import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const List = ({placeNames, removePlace, changeSequence}) => {
   
  let onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    let startIndex = result.source.index;
    let endIndex = result.destination.index; 
    changeSequence(startIndex, endIndex);
  }
  return(
    <DragDropContext
      onDragEnd={onDragEnd} > 
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
        <ul ref={provided.innerRef}  className = 'app__search__list-place'>
            {placeNames.map((placeName, index) => (
              <Draggable key={placeName.id} draggableId={`${placeName.id}`} index={index}>
                {(provided, snapshot) => (
                   <ListItem innerRef={provided.innerRef} provided={provided} key={placeName.id} text = {placeName.text} onClick={() => removePlace(placeName.id)} />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
        </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}
  
  List.propTypes = {
    placeNames: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        isOpen: PropTypes.bool.isRequired,
        coordinates: PropTypes.object.isRequired
      }).isRequired
    ).isRequired,
    removePlace: PropTypes.func.isRequired,
    changeSequence: PropTypes.func.isRequired
  }
  
  export default List