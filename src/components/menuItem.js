import React from 'react';
import {withRouter} from 'react-router-dom'
import routeTo from '../mocks/routeTo'
function MenuItem(props) {

     return (
        <div onClick={() => routeTo(props.route, props) } className='link-list-container-item'>
              {props.title}
          </div>
    );
}

export default withRouter(MenuItem);