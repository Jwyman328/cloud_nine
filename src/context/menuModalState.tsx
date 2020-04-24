import React from 'react';

type AppContextInterFace  = {
    menuModalisOpen:boolean | null;
    setMenuModalIsOpen:Function | Function;
    handleClick:Function ;
}
const menuModalFunc = () => {
    return
}
const MenuModalState = React.createContext<AppContextInterFace>({menuModalisOpen:null, setMenuModalIsOpen:menuModalFunc, handleClick:menuModalFunc});

export default MenuModalState;