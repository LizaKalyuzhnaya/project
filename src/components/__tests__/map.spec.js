import React from 'react'
import { shallow } from 'enzyme'
import Map from '../Map'

describe('Map', () => {
    describe('Map when balloon closed', () => {
        const props = {
            placeNames: [{
                id: 0,
                text: 'A',
                coordinates: { lat: 20, lng: 30 },
                isOpen: false
            }]        
        }

        const myComponent = shallow(<Map {...props} />)

        it('renders properly', () => {
            expect(myComponent).toMatchSnapshot()
        })
    })

    describe('Map when balloon open', () => {
        const props = {
            placeNames: [{
                id: 0,
                text: 'A',
                coordinates: { lat: 20, lng: 30 },
                isOpen: true
            }]        
        }

        const myComponent = shallow(<Map {...props} />)

        it('renders properly', () => {
            expect(myComponent).toMatchSnapshot()
        })
    })
})