import React from 'react';
import comingSoon from '../images/AlbumComingSoon.png'
import SheWalksBy from '../images/SheWalksBy.png'
import {withRouter} from 'react-router-dom'
import '../sass/AlbumPage.scss'

function MusicPage(props) {
    return (
        <div className='AlbumPage'>
            <img className='ComingSoonImage' src={SheWalksBy} />
        </div>
    );
}

export default withRouter(MusicPage);