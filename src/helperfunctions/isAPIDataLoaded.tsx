

import React from 'react'
type ApiData = object[] | []
const isAPIDataLoaded = (apiData: ApiData) => {
    if (apiData.length > 0){
        return true
    }else {
        return false
    }
}

export default isAPIDataLoaded;