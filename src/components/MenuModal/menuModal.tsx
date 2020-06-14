import React, { useContext, Fragment } from "react";
import MenuItem from "../menuItem";
import "./menuModal.scss";
import "../../App.scss";

import spotifyLink from "../../links/spotifyLink";
import MenuModalState from "../../context/menuModalState";
import MenuIcon from "../../images/menu-outline.svg";
import exitIcon from '../../images/exit.svg'

function MenuModal() {
  const menuModalValue = useContext(MenuModalState);
  const { menuModalisOpen, handleClick }  = menuModalValue;
  const menuIconBasedOnIsOpen = menuModalisOpen? exitIcon : MenuIcon

  return (
    <Fragment>
      <div onClick={() => handleClick()}>
        <img className="menu__icon" src={menuIconBasedOnIsOpen} />
      </div>
      {menuModalisOpen ? (
        <div className="link-list --menu-modal">
          <MenuItem title="Home" route="/" />
          <a className="link-list__item link-list__item--menu" href={spotifyLink} target="_blank">
            <MenuItem title="Music" />
          </a>

          <MenuItem title="Shows" route="/Shows" />
          <MenuItem title="news" route="/News" />
        </div>
      ) : null}
    </Fragment>
  );
}

export default MenuModal;
