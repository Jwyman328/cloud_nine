import React from 'react';

function FooterItem(props) {
    return (
        <a href={props.link} target="_blank">
            <img className="footer-social-media-logo"   src={props.logo} />
        </a>

          
    );
}

export default FooterItem;