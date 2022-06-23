
let num = 1

function numCircle() {

    const numSlider = document.querySelectorAll('.main__strategies-item'),
        numDot = document.querySelectorAll('.main__strategies-dot')
    if (num == numSlider.length - 2) {
        numSlider[0].style.opacity = '1'
        numSlider[1].style.opacity = '0'
        numSlider[2].style.opacity = '0'
        numDot[0].classList.add('active')
        numDot[1].classList.remove('active')
        numDot[2].classList.remove('active')
        num++
    } else if (num == numSlider.length - 1) {
        numSlider[0].style.opacity = '0'
        numSlider[1].style.opacity = '1'
        numSlider[2].style.opacity = '0'
        numDot[0].classList.remove('active')
        numDot[1].classList.add('active')
        numDot[2].classList.remove('active')
        num++
    } else if (num == numSlider.length) {
        numSlider[0].style.opacity = '0'
        numSlider[1].style.opacity = '0'
        numSlider[2].style.opacity = '1'
        numDot[0].classList.remove('active')
        numDot[1].classList.remove('active')
        numDot[2].classList.add('active')
        num = 1
    }
}
const screen = window.matchMedia("(max-width:1040px)");

if (screen.matches) {
    setInterval(() => {
        numCircle()
    }, 3000);
}