import React from 'react';

type AppContextInterFace  = {
    menuModalisOpen:boolean | null;
    setMenuModalIsOpen:Function | null;
    handleClick:Function | null;
}
const MenuModalState = React.createContext<AppContextInterFace>({menuModalisOpen:null, setMenuModalIsOpen:null, handleClick:null});

export default MenuModalState;