import React from 'react'
import { shallow, mount } from 'enzyme'
import List from '../List'

describe('List container', () => {

    describe('List container when no item', () => {
        const removePlace = ()=>{};
        const changeSequence = ()=>{};
        const props = { placeNames: [], removePlace, changeSequence }
        const myComponent = shallow(<List {...props} />)
       
        it('render initial', () => {
            expect(myComponent.find('ListItem')).toHaveLength(0)
        })

        it('renders properly', () => {
            expect(myComponent).toMatchSnapshot()
        })
    })

    describe('List container when it has item', () => {
        const removePlace = () => {};
        const changeSequence = () => {};
        const placeNames = [1, 2]
        const props = { placeNames, removePlace, changeSequence }
        const myComponent = mount(<List {...props} />)
        
        it('render initial', () => {
            expect(myComponent.find('ListItem')).toHaveLength(props.placeNames.length);
        })
    })
})
