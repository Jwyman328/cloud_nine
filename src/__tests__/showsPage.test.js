import React from 'react';
import {MemoryRouter} from 'react-router-dom'

import ShowsPage from '../pages/ShowsPage'
import { shallow, mount, render } from 'enzyme';
//import {} from '../mocks/mockTest'
let wrapper;
describe('deep render show page',() => {
    beforeEach(() => {
        wrapper = mount(<ShowsPage />);
    })
    
    it('youtube footer link exists', () => {
        const footerContainer = wrapper.find(".footer-social-media")
        const youtubeFooterItem = footerContainer.childAt(0)
        expect(youtubeFooterItem.props().link).toBe("https://www.youtube.com/channel/UCt2dQJzOhBnxb_nrwmd2Nzw/featured")
    })

    it('spotify footer link exists', () => {
        const footerContainer = wrapper.find(".footer-social-media")
        const footerItem = footerContainer.childAt(1)
        expect(footerItem.props().link).toBe("https://open.spotify.com/artist/34LKlmDVDzR3K28oG0bCDC?si=jSWlQVdtRMqRFVLz1YMjvQ&fbclid=IwAR0R8iZPia3IIh_PvAAFqpFOZ_wiKj0W9MltqCPmV946Ol5IWM96NlI9ie0")
    })

    it('facebook footer link exists', () => {
        const footerContainer = wrapper.find(".footer-social-media")
        const footerItem = footerContainer.childAt(2)
        expect(footerItem.props().link).toBe("https://www.facebook.com/menofcloudnine/")
    })

})


