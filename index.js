const { log } = console

// const daysEl = document.querySelector('.days')
// const hoursEl=document.querySelector('.hours')
// const minutesEl =document.querySelector('.minutes')
// const secondsEl=document.querySelector('.seconds')
// log(days,hours,minutes,seconds)
const numbers = document.querySelectorAll('.number')
const topRects = [...document.querySelectorAll('.topRect')]
const bottomRects = [...document.querySelectorAll('.bottomRect')]
const topNums = [...document.querySelectorAll('.top-num')]
const bottomNums = [...document.querySelectorAll('.bottom-num')]


const tempDate = new Date()
const tempFullYear = tempDate.getFullYear()
const tempMonth = tempDate.getMonth()
const tempDays = tempDate.getDate()
const tempHours = tempDate.getHours()
const tempMinutes = tempDate.getMinutes()
const tempSeconds = tempDate.getSeconds()

const futureDate = new Date(
  tempFullYear,
  tempMonth,
  tempDays + 14,
  tempHours + 1,
  tempMinutes +1,
  tempSeconds + 5
)

const futureTime = futureDate.getTime()

const getRemainingTime = () => {
  const presentTime = new Date().getTime()
  const deltaTime = futureTime - presentTime

  // in milliseconds
  const oneDay = 24 * 60 * 60 * 1000
  const oneHour = 60 * 60 * 1000
  const oneMinute = 60 * 1000
  const oneSecond = 1000

  // deltaTime
  const days = Math.floor(deltaTime / oneDay)
  const hours = Math.floor(deltaTime / oneHour) % 24
  const minutes = Math.floor(deltaTime / oneMinute) % 60
  const seconds = Math.floor(deltaTime / oneSecond) % 60

  const values = [days, hours, minutes, seconds]
  topNums.forEach((item, index) => {
    item.innerHTML = values[index] < 10 ? `0${values[index]}` : values[index]
  })
  bottomNums.forEach((item, index) => {
    item.innerHTML = values[index] < 10 ? `0${values[index]}` : values[index]
  })

  //  daysEl.innerHTML= days < 10 ? `0${days}` : days
  //  hoursEl.innerHTML = hours < 10 ? `0${hours}` : hours
  //  minutesEl.innerHTML = minutes < 10 ? `0${minutes}` : minutes
  //  secondsEl.innerHTML = seconds < 10 ? `0${seconds}` : seconds
  if (hours === 0 && minutes === 0 && seconds === 0) {
    toggleFlip(0)
    toggleFlip(1)
    toggleFlip(2)
    toggleFlip(3)
  } else if (minutes === 0 && seconds === 0) {
    toggleFlip(1)
    toggleFlip(2)
    toggleFlip(3)
  } else if (seconds === 0) {
    toggleFlip(2)
    toggleFlip(3)
  } else if (seconds !== 0) {
    toggleFlip(3)
  }

  if (deltaTime < 0) {
    clearInterval(interval)
  }
}

function toggleFlip(index) {
//   topRects[index].classList.toggle('flip')
//   bottomRects[index].classList.toggle('flip')
  setTimeout(() => {
    topRects[index].classList.toggle('flip')
    bottomRects[index].classList.toggle('flip')
  }, 500)
}

// initialize
getRemainingTime()

const interval = setInterval(getRemainingTime, 1000)
