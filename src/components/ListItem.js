import React from 'react'
import PropTypes from 'prop-types'


class ListItem extends React.Component {
  render() {
    const { provided, innerRef } = this.props;
    return (
      <li {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={innerRef} 
          className = 'app__search__list-place__item' >
        <p className = 'app__search__list-place__item__text' >{this.props.text}</p>
        <div onClick = {this.props.onClick}>
          <svg className = 'app__search__list-place__item__svg' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M1.09325 0.0324857L0.0325866 1.09315L5.68944 6.75L0.0325866 12.4069L1.09325 13.4675L6.7501 7.81066L12.407 13.4675L13.4676 12.4069L7.81076 6.75L13.4676 1.09315L12.407 0.0324857L6.7501 5.68934L1.09325 0.0324857Z" fill="#007AFF"/>
          </svg>
        </div>
      </li>
    )
  }
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ListItem