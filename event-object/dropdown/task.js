const dropDownList = document.querySelectorAll('.dropdown')
const array = Array.from(dropDownList)

for (let i = 0; i < array.length; i++) {
	//console.log(array[i].children)
	array[i].querySelector('div').addEventListener('click', toggleDropDown)
	array[i].querySelector('ul').addEventListener('click', changeDropDownVale)
}


// function openList(e) {
// 	const dropDownValue = this.querySelector('.dropdown__value')
// 	const list = this.closest('.dropdown').querySelector('ul')

// 	if(list.classList.value.includes('dropdown__list_active')){
// 		dropDownValue.textContent =  e.target.textContent;

// 	}
// 	e.preventDefault();
// 	list.classList.toggle('dropdown__list_active')
	
// }
function toggleDropDown() {
	//console.log(this.closest('.dropdown'))
	this.closest('.dropdown').querySelector('ul').classList.toggle('dropdown__list_active')
}

function changeDropDownVale(e) {
	e.preventDefault();
	this.closest('.dropdown').querySelector('div').textContent = e.target.textContent
	this.closest('.dropdown').querySelector('ul').classList.toggle('dropdown__list_active')
}