import { connect } from 'react-redux'
import myMap from '../components/Map'
import {updateMapCenter} from '../actions'
import {updateMarkerCoordinates} from '../actions'
import {openInfo} from '../actions'

const mapStateToProps = state => ({
    placeNames: state.placeNames
})
const mapDispatchToProps = dispatch => ({
    updateMapCenter: (coordinates) => dispatch(updateMapCenter(coordinates)),
    updateMarkerCoordinates: (id, coordinates) => dispatch(updateMarkerCoordinates(id, coordinates)),
    openInfo: (id) => dispatch(openInfo(id))
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(myMap)