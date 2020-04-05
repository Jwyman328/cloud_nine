import React from 'react';
import {withRouter} from 'react-router-dom'

function MenuItem(props) {

    const routeTo = (routeLocation) => {
        props.history.push(routeLocation)
    }
     return (
        <div onClick={() => routeTo(props.route) } className='link-list-container-item'>
              {props.title}
          </div>
    );
}

export default withRouter(MenuItem);