import placeNames from '../placeNames'
import { firstPlace } from '../placeNames'

const initialState = [firstPlace, {
    id: 1,
    text: 'A',
    coordinates: { lat: 20, lng: 30 },
    isOpen: false
}, {
    id: 2,
    text: 'F',
    coordinates: { lat: 23, lng: 18 },
    isOpen: false
}]

describe('place names', () => {
    
    it('ADD_PLACE', () => {
        const action = {
            type: 'ADD_PLACE',
            id: 1,
            text: 'A',
            centerCoordinates: { lat: 20, lng: 30 },
            isOpen: false
          }
        
        expect(placeNames([firstPlace], action)).toEqual([
            firstPlace,
            {
                id: 1,
                text: 'A',
                coordinates: { lat: 20, lng: 30 },
                isOpen: false
            }
        ])
    })

    it('REMOVE_PLACE if 1 items in arr', () => {
        const action = {
            type: 'REMOVE_PLACE',
            id: 0
          }
        
        expect(placeNames([firstPlace], action)).toEqual([
        ])
    })

    it('REMOVE_PLACE if more then 1 items in arr', () => {
        const action = {
            type: 'REMOVE_PLACE',
            id: 1
          }
        
        expect(placeNames(initialState, action)).toEqual([
            initialState[0], initialState[2]
        ])
    })

    it('CHANGE_LIST_SEQUENCE if item moves from top to bottom', () => {
        const action = {
            type: 'CHANGE_LIST_SEQUENCE',
            startIndex: 0,
            endIndex: 2
          }
        
        expect(placeNames(initialState, action)).toEqual([
            initialState[1], initialState[2], initialState[0]
        ])
    })

    it('CHANGE_LIST_SEQUENCE if item moves from bottom to top', () => {
        const action = {
            type: 'CHANGE_LIST_SEQUENCE',
            startIndex: 1,
            endIndex: 0
          }
        
        expect(placeNames(initialState, action)).toEqual([
            initialState[1], initialState[0], initialState[2]
        ])
    })
    it('CHANGE_MARKER_COORDINATES', () => {
        const action = {
            type: 'CHANGE_MARKER_COORDINATES',
            id: 0,
            coordinates: { lat: 12, lng: 16 }
          }
        
        expect(placeNames([firstPlace], action)).toEqual([{
            ...firstPlace,
            coordinates: { lat: 12, lng: 16 }
        }])
    })

    it('OPEN_INFO if it was closed', () => {
        const action = {
            type: 'OPEN_INFO',
            id: 0
          }
        
        expect(placeNames([firstPlace], action)).toEqual([
            {
                ...firstPlace,
                isOpen: true
            }
        ])
    })

    it('OPEN_INFO if it was open', () => {
        const action = {
            type: 'OPEN_INFO',
            id: 0
          }
        const openBalloon = {
            id: 0,
            text: 'Санкт-Петербург',
            coordinates: { lat: 59.939095, lng: 30.315868 },
            isOpen: true
        }
        
        expect(placeNames([openBalloon], action)).toEqual([
            {
                ...openBalloon,
                isOpen: false
            }
        ])
    })
})