import React, {useContext} from 'react'
import menuModalState from '../context/menuModalState'

function PageTitle({titleText}){

    return (
        <div className="pageTitle">{titleText}</div> 
    )
}

export default PageTitle;