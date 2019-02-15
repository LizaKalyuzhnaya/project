import React from 'react'
import { connect } from 'react-redux'
import { addPlace } from '../actions'

const AddPlaceName = ({ dispatch, centerCoordinates }) => {
    let input  
    return (
      <div>
        <form
          className = 'app__search__form'
          onSubmit={e => {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            dispatch(addPlace(input.value, centerCoordinates))
            input.value = '';
          }}
        >
          <input className = 'app__search__form__input' ref={node => (input = node)} />
          <button className = 'app__search__form__button' type="submit">Add</button>
        </form>
      </div>
    )
  }
  
  const mapStateToProps = state => ({
    centerCoordinates: state.centerCoordinates
  })

  export default connect(mapStateToProps)(AddPlaceName)