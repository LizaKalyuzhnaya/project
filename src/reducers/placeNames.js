export const firstPlace = {
  id: 0,
  text: 'Санкт-Петербург',
  coordinates: { lat: 59.939095, lng: 30.315868 },
  isOpen: false
}

const placeNames = (state = [firstPlace], action) => {
  switch (action.type) {
    case 'ADD_PLACE': {
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          coordinates: action.centerCoordinates,
          isOpen: action.isOpen
        }
      ]
    }
    case 'REMOVE_PLACE': {
      return state.filter(el => el.id !== action.id);
    }
    case 'CHANGE_LIST_SEQUENCE': {
      let newArr = [];
      let startIndex = action.startIndex;
      let endIndex = action.endIndex; 
      if(endIndex > startIndex){
        newArr = [
          ...state.slice(0, endIndex+1),
            state[startIndex],
          ...state.slice(endIndex)
            ];
            newArr.splice(startIndex, 1);
            newArr.splice(endIndex + 1, 1);
      }else{
        newArr = [
          ...state.slice(0, endIndex),
            state[startIndex],
            ...state.slice(endIndex)
            ];
        newArr.splice(startIndex + 1, 1);
      }
      return newArr;      
    }
    case 'CHANGE_MARKER_COORDINATES': {
      let i = state.findIndex(placeNames => placeNames.id === action.id);
      return [
        ...state.slice(0, i),
        {
         id: state[i].id,
         text: state[i].text,
         coordinates: action.coordinates,
         isOpen: state[i].isOpen
       },
       ...state.slice(i + 1)
      ];
    }
    case 'OPEN_INFO': {
      let index = state.findIndex(placeNames => placeNames.id === action.id);
      return [
        ...state.slice(0, index),
        {
         id: state[index].id,
         text: state[index].text,
         coordinates: state[index].coordinates,
         isOpen: !state[index].isOpen
       },
       ...state.slice(index + 1)
      ];
    }
    default:
      return state
  }
}

export default placeNames