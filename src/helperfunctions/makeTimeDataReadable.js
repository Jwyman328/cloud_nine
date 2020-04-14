
 const makeTimeDataReadable = (fullTime) => {
    let [dateTime1,hourTimeZ] = fullTime.split('T')
    let [hourTime,z] = hourTimeZ.split('Z')
    let[year,month,day] = dateTime1.split('-')
    let dateTime = `${month}-${day}-${year}`
    return ([hourTime, dateTime])
}

export default makeTimeDataReadable;