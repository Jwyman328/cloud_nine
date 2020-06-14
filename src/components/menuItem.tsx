import React, {useContext} from 'react';
import {withRouter,RouteComponentProps} from 'react-router-dom'
import routeTo from '../mocks/routeTo'
import menuModalState from "../context/menuModalState";
import { MenuProps } from '../models/MenuItemPropsModel';

function MenuItem(props:MenuProps) {
    const menuModalValue = useContext(menuModalState);
    const {setMenuModalIsOpen } = menuModalValue;
    const title: string = props.title
     // make menu modal false in case route came from modal
    const handleMenuItemClick = ():void => {
        setMenuModalIsOpen(false);
        routeTo(props.route, props) 
    }
     return (
        <div onClick={() => handleMenuItemClick() } className='link-list__item'>
              {title}
          </div>
    );
}

export default withRouter(MenuItem);