import { combineReducers } from 'redux'
import placeNames from './placeNames'
import centerCoordinates from './centerCoordinates'

export default combineReducers({
    placeNames,
    centerCoordinates
})