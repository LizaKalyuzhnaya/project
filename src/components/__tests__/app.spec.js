import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../reducers'
import { shallow, mount } from 'enzyme'
import App from '../App'
import myMap from '../Map'

describe('App', () => {
    describe('App mount', () => {
        const store = createStore(rootReducer);
        const myComponent = mount(
                                <Provider store={store}>
                                    <App />
                                </Provider>
                                );
                                
        it('render initial', () => {
            expect(myComponent.find('AddPlaceName')).toHaveLength(1);
            expect(myComponent.find('List')).toHaveLength(1);
            expect(myComponent.find(myMap)).toHaveLength(1);
        })
    })

    describe('App shallow', () => {
        const myComponent = shallow(<App />);

        it('renders properly', () => {
            expect(myComponent).toMatchSnapshot()
        })
    })    
})