import React from 'react';
import {withRouter} from 'react-router-dom'
import routeTo from '../mocks/routeTo'
function MenuItem(props) {

/*     const routeTo = (routeLocation) => {
        console.log(routeLocation,'he', )
        props.history.push(routeLocation)
    } */
     return (
        <div onClick={() => routeTo(props.route, props) } className='link-list-container-item'>
              {props.title}
          </div>
    );
}

export default withRouter(MenuItem);