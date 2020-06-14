import React from 'react';
import {MemoryRouter} from 'react-router-dom'

import App from '../App'
import HomePage from '../pages/HomePage'
import menuItem from '../components/menuItem'
import { shallow, mount, render } from 'enzyme';
let wrapper;

// test the entire app rendering to each page from the homepage .
describe('Test HomePage rendering works', () => {
    beforeEach(async() => {
        wrapper = mount(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>)
    })

    it('Home menu link stays at homepage after click',() => {
        const homeMenuItem = wrapper.find('.link-list__item').at(0);
        homeMenuItem.simulate('click')

        const homeMenuItemStillHere = wrapper.find('.link-list__item').at(0);
        expect(homeMenuItemStillHere.text()).toBe('Home')
    })

    it('Music menu link stays at homepage after click',() => {
        const musicMenuItem = wrapper.find('.link-list__item').at(1);
        musicMenuItem.simulate('click')

        const musicMenuItemStillHere = wrapper.find('.link-list__item').at(1);
        expect(musicMenuItemStillHere.text()).toBe('Music')
    })


     it('Show menu link navigates to showpage after click',() => {
        const showMenuItem = wrapper.find('.link-list__item').at(2);
        console.log(showMenuItem.props().onClick)
        showMenuItem.simulate('click')

        wrapper.update()
        const showpage__titleText = wrapper.find('.page__title').text();
        expect(showpage__titleText).toBe('Shows')
    })
})


