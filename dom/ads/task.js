 const rotators = document.querySelectorAll('.rotator')

 for (rotator of rotators) {
 	const currentElement = rotator.querySelector('.rotator__case_active')
 	currentElement.style.color = currentElement.dataset.color

 	setTimeout(changeRotator, currentElement.dataset.speed, rotator);
 }


function changeRotator(rotator){

	const currentElement = rotator.querySelector('.rotator__case_active')
	const rotatorList = Array.from(rotator.children)

	const lastIndex = rotatorList.length - 1
	const currentIndex = rotatorList.indexOf(currentElement)
	rotatorList[currentIndex].classList.toggle('rotator__case_active')


	const nextIndex = currentIndex !== lastIndex ? currentIndex + 1 : 0


	rotatorList[nextIndex].classList.toggle('rotator__case_active')

	rotatorList[nextIndex].style.color = rotatorList[nextIndex].dataset.color
	const speed = rotatorList[nextIndex].dataset.speed
	 setTimeout(changeRotator, speed, rotator);
}

