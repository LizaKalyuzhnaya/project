import { connect } from 'react-redux'
import List from '../components/List'
import { removePlace } from '../actions'
import { changeSequence } from '../actions'

const mapStateToProps = state => ({
  placeNames: state.placeNames
})

const mapDispatchToProps = dispatch => ({
  removePlace: id => dispatch(removePlace(id)),
  changeSequence: (startIndex, endIndex) => dispatch(changeSequence(startIndex, endIndex))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)