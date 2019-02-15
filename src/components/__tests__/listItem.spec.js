import React from 'react'
import { shallow } from 'enzyme'
import ListItem from '../ListItem'

describe('List items', () => {
    const props = {
        text: 'a',
        provided: {}
    }
    const myComponent = shallow(<ListItem {...props} />)

    it('render initial', () => {
            expect(myComponent.find('p').text()).toEqual(props.text);
            expect(myComponent.find('svg')).toHaveLength(1);
    })

    it('renders properly', () => {
        expect(myComponent).toMatchSnapshot()
    })
})
