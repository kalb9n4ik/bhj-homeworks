const dropDownValue = document.querySelector('.dropdown__value')
const dropDown = dropDownValue.closest('.dropdown')
const list = dropDown.querySelector('ul')

dropDown.addEventListener('click', openList)


function openList(e) {

	e.preventDefault();
	
	if(list.classList.value.includes('dropdown__list_active')) {
		console.log('выключили')
		dropDownValue.textContent = e.target.textContent
	}
	
	list.classList.toggle('dropdown__list_active')
}