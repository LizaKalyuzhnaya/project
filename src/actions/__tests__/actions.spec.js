import { addPlace } from '../index'
import { openInfo } from '../index'
import { changeSequence } from '../index'
import { updateMapCenter } from '../index'
import { removePlace } from '../index'
import { updateMarkerCoordinates } from '../index'
import { nextPlace } from '../index'

describe('actions', () => {

    it('add place', () => {
        const expectedAction = {
            type: 'ADD_PLACE',
            id: nextPlace,
            text: 'A',
            centerCoordinates: {'lat': 1, 'lng': 1},
            isOpen: false
        }
        
        expect(addPlace('A', {'lat': 1, 'lng': 1})).toEqual(
            expectedAction
        )
    })

    it('open info balloon', () => {
        const expectedAction = {
            type: 'OPEN_INFO',
            id: nextPlace
        }
        
        expect(openInfo(nextPlace)).toEqual(
            expectedAction
        )
    })

    it('change sequence list', () => {
        const expectedAction = {
            type: 'CHANGE_LIST_SEQUENCE',
            startIndex: 0,
            endIndex: 1
        }
        
        expect(changeSequence( 0, 1 )).toEqual(
            expectedAction
        )
    })

    it('update map center', () => {
        const expectedAction = {
            type: 'CHANGE_MAP_CENTER',
            coordinates: {'lat': 1, 'lng': 1}
        }
        
        expect(updateMapCenter( { 'lat': 1, 'lng': 1 } )).toEqual(
            expectedAction
        )
    })

    it('remove place', () => {
        const expectedAction = {
            type: 'REMOVE_PLACE',
            id: nextPlace
        }
        
        expect(removePlace(nextPlace)).toEqual(
            expectedAction
        )
    })

    it('update marker coordinates', () => {
        const expectedAction = {
            type: 'CHANGE_MARKER_COORDINATES',
            id: nextPlace,
            coordinates: { 'lat': 1, 'lng': 1 }
        }
        
        expect(updateMarkerCoordinates(nextPlace, { 'lat': 1, 'lng': 1 })).toEqual(
            expectedAction
        )
    })
})