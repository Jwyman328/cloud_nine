import React from 'react';
import {MemoryRouter} from 'react-router-dom'

import App from '../App'
import HomePage from '../pages/HomePage'
import menuItem from '../components/menuItem'
import { shallow, mount, render } from 'enzyme';
let wrapper;
import RouteTo from '../mocks/routeTo'

const MockMyComponent = () => {
    console.log('dogs')
}

//mock the route rendering 
jest.mock('../mocks/routeTo', () =>({
    __esModule: true,
    namedExport: jest.fn(),
    default: jest.fn()
}))

describe('Test HomePage rendering routeTo function was clicked', () => {
    beforeEach(async() => {
        
        RouteTo.mockImplementation(MockMyComponent)
        wrapper = mount(<MemoryRouter initialEntries={['/']}><HomePage /></MemoryRouter>)

    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('Home menu link routeTo reports a click',() => {

        const homeMenuItem = wrapper.find('.link-list__item').at(0);
        homeMenuItem.simulate('click')
        wrapper.update()
        expect(RouteTo.mock.calls.length).toBe(1);
    })

    it('Music menu link reports a click',() => {
        const musicMenuItem = wrapper.find('.link-list__item').at(1);
        musicMenuItem.simulate('click')
        wrapper.update()

        expect(RouteTo.mock.calls.length).toBe(1);
    })

})


