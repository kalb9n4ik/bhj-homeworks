const buttonPrev = document.querySelector('.slider__arrow_prev')
const buttonNext = document.querySelector('.slider__arrow_next')
let sliderItems = document.querySelectorAll('.slider__items > div')
let sliderDots = document.querySelectorAll('.slider__dots > div')

let direction = null;
setSliderDot()


buttonPrev.onclick = () => {
	direction = 0;
	changeImage(direction);
}

buttonNext.onclick = () => {
	direction = 1;
	changeImage(direction);
}

function changeImage(direction) {
	const arrImages = Array.from(sliderItems)
	const indexOldImage = arrImages.indexOf(document.querySelector('div.slider__item_active'))

	sliderItems[indexOldImage].classList.toggle('slider__item_active')


	if(direction) {
	//	console.log('Нажали вперед')
		if(indexOldImage ===  arrImages.length - 1) {
			sliderItems[0].classList.toggle('slider__item_active')
			setSliderDot(0, indexOldImage)
			
		} else {
			sliderItems[indexOldImage + 1].classList.toggle('slider__item_active')
			setSliderDot(indexOldImage + 1, indexOldImage)
		}
		
	} else	{
	//	console.log('Нажали назад')
		if(indexOldImage ===  0) {
			sliderItems[arrImages.length - 1].classList.toggle('slider__item_active')
			setSliderDot(arrImages.length - 1, indexOldImage)
		} else {
			sliderItems[indexOldImage - 1].classList.toggle('slider__item_active')
			setSliderDot(indexOldImage - 1, indexOldImage)
		}
	}
}


function setSliderDot(indexNew, indexOld) {

	// Установка начальной точки
	if(direction === null){
		sliderDots[0].classList.toggle('slider__dot_active')
		return
	}


	sliderDots[indexOld].classList.toggle('slider__dot_active')
	sliderDots[indexNew].classList.toggle('slider__dot_active')
}