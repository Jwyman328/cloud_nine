import React, {useContext} from 'react'
import menuModalState from '../context/menuModalState'

type PageTitleText = {
    titleText:string
}

function PageTitle({titleText}:PageTitleText){

    return (
        <div className="pageTitle">{titleText}</div> 
    )
}

export default PageTitle;