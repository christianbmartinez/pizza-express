// Logout the user
const logout = async () => {
  await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
  window.location.replace('/login')
}
// Carousel Slider
let pixels = 0

if (window.innerWidth < 780) {
  pixels = 0
} else {
  pixels = -300
}

const goNext = () => {
  pixels = pixels - 467
  const slider = document.getElementById('slider')
  if (Math.abs(pixels) >= slider.scrollWidth / 1.7) {
    pixels = 0
  }
  slider.style.transform = `translateX(${pixels}px)`
}

const goPrev = () => {
  const slider = document.getElementById('slider')
  if (Math.abs(pixels) === 0) {
    pixels = 0
  }
  slider.style.transform = `translateX(${pixels}px)`
}
