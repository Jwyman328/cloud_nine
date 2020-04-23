import React from 'react';

type AppContextInterFace  = {
    menuModalisOpen:boolean;
    setMenuModalIsOpen:Function;
    handleClick:Function;
}
const MenuModalState = React.createContext<any>(null);

export default MenuModalState;