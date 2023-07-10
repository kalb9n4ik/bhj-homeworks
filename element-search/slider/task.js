const buttonPrev = document.querySelector('.slider__arrow_prev')
const buttonNext = document.querySelector('.slider__arrow_next')
let sliderItems = document.querySelectorAll('.slider__items > div')
let sliderDots = document.querySelectorAll('.slider__dots > div')


// Установка начальной точки
sliderDots[0].classList.toggle('slider__dot_active')

for (let i = 0; i < sliderDots.length; i++) {
	sliderDots[i].onclick = () => {
		const oldIndex = getOldImage();
		changeImageForDots(i, oldIndex)
		setSliderDot(i, oldIndex)
		
	}
}

buttonPrev.onclick = () => {
	const old = getOldImage()
	prevImage(old)
}

buttonNext.onclick = () => {
	const old = getOldImage()
	nextImage(old)
}

function getOldImage(){
	const arrImages = Array.from(sliderItems)
	const indexOldImage = arrImages.indexOf(document.querySelector('div.slider__item_active'))
	return indexOldImage
}


function nextImage(indexOldImage){
	sliderItems[indexOldImage].classList.toggle('slider__item_active')

	if(indexOldImage ===  sliderItems.length - 1) {
		sliderItems[0].classList.toggle('slider__item_active')
		setSliderDot(0, indexOldImage)
	} else {
		sliderItems[indexOldImage + 1].classList.toggle('slider__item_active')
		setSliderDot(indexOldImage + 1, indexOldImage)
	}
}

function prevImage(indexOldImage){
	sliderItems[indexOldImage].classList.toggle('slider__item_active')

	if(indexOldImage ===  0) {
		sliderItems[sliderItems.length - 1].classList.toggle('slider__item_active')
		setSliderDot(sliderItems.length - 1, indexOldImage)
	} else {
		sliderItems[indexOldImage - 1].classList.toggle('slider__item_active')
		setSliderDot(indexOldImage - 1, indexOldImage)
	}
}

function setSliderDot(newIndex, oldIndex){
	sliderDots[newIndex].classList.toggle('slider__dot_active')
	sliderDots[oldIndex].classList.toggle('slider__dot_active')
}

function changeImageForDots(newIndex, oldIndex){
	sliderItems[oldIndex].classList.toggle('slider__item_active')
	sliderItems[newIndex].classList.toggle('slider__item_active')
}
