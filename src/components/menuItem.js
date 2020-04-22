import React, {useContext} from 'react';
import {withRouter} from 'react-router-dom'
import routeTo from '../mocks/routeTo'
import menuModalState from "../context/menuModalState";

function MenuItem(props) {
    const menuModalValue = useContext(menuModalState);
    const {setMenuModalIsOpen } = menuModalValue;
   
     // make menu modal false in case route came from modal
    const handleMenuItemClick = () => {
        setMenuModalIsOpen(false);
        routeTo(props.route, props) 
    }
     return (
        <div onClick={() => handleMenuItemClick() } className='link-list-container-item'>
              {props.title}
          </div>
    );
}

export default withRouter(MenuItem);