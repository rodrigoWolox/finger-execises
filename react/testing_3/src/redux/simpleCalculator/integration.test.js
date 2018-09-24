import React from 'react';
import { createStore, Provider } from 'redux';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store'

import SimpleCalculator from '../../../src/app/components/SimpleCalculator'

import actionCreators from './actions'
import reducer from './reducer';

configure({ adapter: new Adapter() });

describe('Test - Store + reducer integration testing', () => {
    const initialState = { calculatorValue: 100 }
    let store, wrapper

    beforeEach(() => {
        store = createStore(reducer)
        wrapper = mount(<Provider store={store}><SimpleCalculator /></Provider>)
    })

    it('Check SimpleCalculator Prop matches with initialState', () => {
        store.dispatch(actionCreators.add())
        expect(wrapper.find(SimpleCalculator).prop('calculatorValue')).toBe(100)
    });
});

/*
describe('Test --- Shallow + passing the {store} directly', () => {
    const initialState = { calculatorValue: 100 }
    const mockStore = configureStore()
    let store, container

    beforeEach(() => {
        store = mockStore(initialState)
        container = shallow(<SimpleCalculator store={store} />)
    })

    it('Check if component renderered properly', () => {
        expect(container.length).toEqual(1)
    });

    it('Check component Prop matches with initialState', () => {
        expect(container.prop('calculatorValue')).toEqual(initialState.calculatorValue)
    });

});
*/