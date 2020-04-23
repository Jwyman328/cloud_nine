import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom'
import routeTo from '../mocks/routeTo'
import menuModalState from "../context/menuModalState";

function MenuItem(props) {
    const menuModalValue = useContext(menuModalState);
    const {setMenuModalIsOpen } = menuModalValue;
    const title: string = props.title
    const routeLocation: string = props.route
     // make menu modal false in case route came from modal
    const handleMenuItemClick = ():void => {
        setMenuModalIsOpen(false);
        routeTo(routeLocation, props) 
    }
     return (
        <div onClick={() => handleMenuItemClick() } className='link-list-container-item'>
              {title}
          </div>
    );
}

export default withRouter(MenuItem);