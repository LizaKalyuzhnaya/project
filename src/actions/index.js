export let nextPlace = 1;
export const addPlace = (text, centerCoordinates) => ({
  type: 'ADD_PLACE',
  id: nextPlace++,
  text,
  centerCoordinates,
  isOpen: false
})

export const openInfo = ( id ) => ({
  type: 'OPEN_INFO',
  id
})

export const changeSequence = (startIndex, endIndex) => ({
  type: 'CHANGE_LIST_SEQUENCE',
  startIndex,
  endIndex
})

export const updateMapCenter = coordinates => ({
  type: 'CHANGE_MAP_CENTER',
  coordinates
})

export const removePlace = id => ({
  type: 'REMOVE_PLACE',
  id
})

export const updateMarkerCoordinates = (id, coordinates) => ({
  type: 'CHANGE_MARKER_COORDINATES',
  id,
  coordinates
})