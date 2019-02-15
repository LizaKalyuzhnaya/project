import centerCoordinates from '../centerCoordinates'

describe('map center coordinates reducer', () => {

    it('CHANGE_MAP_CENTER', () => {
        const action = {
            type: 'CHANGE_MAP_CENTER',
            'coordinates': {'lat': 50, 'lng': 30}
          }
        
        expect(centerCoordinates({ 'lat': 59.939095, 'lng': 30.315868 }, action)).toEqual({
            'lat': 50, 'lng': 30
        })
    })
})