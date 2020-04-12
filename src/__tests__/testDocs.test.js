import React from 'react'

import App from '../App'
import ShowsPage from '../pages/ShowsPage'
import { shallow, mount, render } from 'enzyme';

let wrapper;
beforeEach(() => {
    wrapper = mount(<ShowsPage />);
})

it('shows page title', () => {
    const title = wrapper.find('.pageTitle').text()
    expect(title).toBe('Shows')
})