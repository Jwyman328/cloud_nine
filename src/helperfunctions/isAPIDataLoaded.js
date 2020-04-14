

import React from 'react'

const isAPIDataLoaded = (apiData) => {
    if (apiData.length > 0){
        return true
    }else {
        return false
    }
}

export default isAPIDataLoaded;