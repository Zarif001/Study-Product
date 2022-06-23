try {
    // Вентилятор :)
    const navImg = document.querySelector('.header__nav-img')
    navImg.addEventListener('click', () => {
        if(navImg.classList.contains('active')){
            navImg.classList.remove('active')
        } else {
            navImg.classList.add('active')

        }
    })
    // Prices

    const priceItem = document.querySelectorAll('.main__prices-item')

    priceItem.forEach((item, i) =>{
        item.addEventListener('click', () => {
            if (priceItem[i].classList.contains('active')) {
                priceItem[i].classList.remove('active')
            } else {
                priceItem[i].classList.add('active')
            }
        })
    })

    // Burger

    function burgerClick() {
        const burger = document.querySelector('.header__nav-burger img'),
            navItem = document.querySelector('.header__nav-items')
        
        burger.addEventListener('click', () =>{
            console.log('dasasd');
           navItem.classList.toggle('active')
        })
    }
    burgerClick()



    // Slide

    function nextSlide() {
        const strSliderParent = document.querySelector('.main__strategies-items'),
            strSliderWidth = document.querySelector('.main__strategies-item')

        let strSlider = document.querySelectorAll('.main__strategies-item'),
            strDot = document.querySelectorAll('.main__strategies-dot'),
            index = 0,
            dotIndex = 0,
            width = strSliderWidth.clientWidth


        if (index < ((strSlider.length - 3) * width)) {
            index += width
            dotIndex++
        } else if (index === ((strSlider.length - 3) * width)) {
            dotIndex = 0
            let strCloneFirst = strSlider[0].cloneNode(true)
            let strCloneMid = strSlider[1].cloneNode(true)
            let strCloneLast = strSlider[strSlider.length - 1].cloneNode(true)

            strSliderParent.appendChild(strCloneFirst)
            strSliderParent.appendChild(strCloneMid)
            strSliderParent.appendChild(strCloneLast)

            strSlider = document.querySelectorAll('.main__strategies-item')

        }

        strSlider.forEach(item => {
            item.style.transform = `translateX(-${index}px)`
            item.style.transition = '1000ms'

        })
        strDot.forEach(dot => {
            dot.classList.remove('active')
        })
        strDot = document.querySelectorAll('.main__strategies-dot')
        strDot[dotIndex].classList.add('active') 
    }
    const screen = window.matchMedia("(min-width:1040px)");

    if (screen.matches) {
        setInterval(() => {
            nextSlide()
        }, 2000);
    }
} catch (e) { }
