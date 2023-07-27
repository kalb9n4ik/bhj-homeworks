const reveals = document.querySelectorAll('.reveal')

document.addEventListener('scroll', function(event) {
	for (reveal of reveals) {

		if(isInViewport(reveal)){
			reveal.classList.add('reveal_active')
		}
	}
})

let isInViewport = function(element){
	const viewportHeight = window.innerHeight;
	const elementTop = element.getBoundingClientRect().top;
	return elementTop < viewportHeight ? true : false;
};