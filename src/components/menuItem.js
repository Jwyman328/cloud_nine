import React from 'react';

function MenuItem(props) {
    return (
        <div className='link-list-container-item'>
              {props.title}
          </div>
    );
}

export default MenuItem;