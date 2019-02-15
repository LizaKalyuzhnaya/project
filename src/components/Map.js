import React from 'react';
import PropTypes from 'prop-types'
import { compose, withProps, withHandlers } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, Polyline } from "react-google-maps"

const MyMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCnwOD27FbIUsHC-RndOtEYar_ADYBT1Dg",
    loadingElement: <div style={{ height: `80%` }} />,
    containerElement: <div style={{ height: `97vh`, width: `70vw` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }
    const markerRef = [];

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      changeMapCenter: (props) => () => {
        let centerCoord =refs.map.getCenter();
        let [lat, lng] = [centerCoord.lat(), centerCoord.lng()];
        props.updateMapCenter({lat, lng});
      },
      onMarkerMounted: () => (ref) => {
        if (ref) {
          markerRef.push(ref);
        }
      },
      dragMarker: (props) => (id) => {
        let newMarkerPosition = markerRef[id].getPosition();
        let [lat, lng] = [newMarkerPosition.lat(), newMarkerPosition.lng()]
        props.updateMarkerCoordinates(id, {lat, lng});
      },
      onToggleOpen: ( props ) => (id) => {
        props.openInfo(id);
      }
    }
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  let reducer = (acc, item) => {
    acc.push(item.coordinates);
    return acc;
  }
  let coordinatesForLines = (props.placeNames).reduce(reducer, []);
  return (
      <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={8}
        defaultCenter={{ lat: 59.939095, lng: 30.315868 }}
        onCenterChanged = {props.changeMapCenter}
      >
        {props.placeNames &&  
          props.placeNames.map(item => {
            return(
              <Marker key= {item.id} ref={props.onMarkerMounted} onClick = {() => props.onToggleOpen(item.id)} draggable = {true} onDragEnd ={()=>props.dragMarker(item.id)} position={item.coordinates}>
              {item.isOpen && <InfoWindow onCloseClick = {() => props.onToggleOpen(item.id)} >
                  <div>{item.text}</div>
                </InfoWindow>}
              </Marker> 
              )
          })  
        }
        <Polyline path = {coordinatesForLines} />
      </GoogleMap>
  )
})


MyMap.propTypes = {
  placeNames: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      isOpen: PropTypes.bool.isRequired,
      coordinates: PropTypes.object.isRequired
    }).isRequired
  ).isRequired,
  updateMarkerCoordinates: PropTypes.func.isRequired,
  updateMapCenter: PropTypes.func.isRequired,
  openInfo: PropTypes.func.isRequired
}


export default MyMap;

