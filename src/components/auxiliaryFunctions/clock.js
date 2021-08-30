// this is just a clock for the when timer is on
const cooldown = function (counter) {
  let sec
  let min
  let hour
  let addZero
  let addZeroMin
  let addZeroHour
  addZero = (counter % 60 < 10 || counter) < 10 ? '0' : ''
  addZeroMin = (Math.floor((counter / 60) % 60)) < 10 ? '0' : ''
  addZeroHour = (Math.floor((counter / 60) / 60 % 60)) < 10 ? '0' : ''
  sec = `${addZero}${counter}s`
  min = `${Math.floor(counter / 60)}:${addZero}${counter % 60}`
  hour = (
    `cooldown ${addZeroHour}${Math.floor((counter / 60) / 60)}:
    ${addZeroMin}${Math.floor((counter / 60) % 60)}:
    ${addZero}${Math.floor((counter % 60))}`
  )
  if (counter < 60) {
    return sec
  } else if (counter < 3600) {
    return min
  } else if (counter > 3600) { return hour }

  return counter
}

export default cooldown
