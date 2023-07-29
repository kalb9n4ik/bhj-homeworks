const links = document.querySelectorAll('a.has-tooltip')
let flagTooltip = false;
let activeTooltip = null;


for (let link of links) {

	createTooltip(link)

	link.addEventListener('click', (event) => { 
		// отмена работы ссылки
		event.preventDefault()
		
		
		if(!flagTooltip){

			const toolTip = event.target.nextSibling

			// поднятие флага
			flagTooltip = true
			activeTooltip = event.target

			addPositionTooltip(toolTip, link)

			// активация подсказки
			toolTip.classList.add('tooltip_active')
		
		} else if(flagTooltip && activeTooltip === event.target) {

			event.target.nextSibling.classList.remove('tooltip_active')
			flagTooltip = false
		}
		
	})
}

function createTooltip(link){

	const element = document.createElement('div')
	const content = document.createTextNode(link.getAttribute('title'))
	element.appendChild(content)
	element.classList.add('tooltip')

	// добавление в DOM
	link.insertAdjacentElement('afterend', element)
}

function addPositionTooltip(toolTip, clickLink) {
	// добваление положения подсказки
	toolTip.style.left = `${clickLink.offsetLeft}px`;
	toolTip.style.top = `${clickLink.offsetTop + clickLink.offsetHeight}px`;
}

