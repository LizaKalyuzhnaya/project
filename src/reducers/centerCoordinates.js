const centerCoordinates = (state = { lat: 59.939095, lng: 30.315868 }, action) => {
  switch (action.type) {
    case 'CHANGE_MAP_CENTER':
      return action.coordinates
    default:
      return state
  }
}

export default centerCoordinates