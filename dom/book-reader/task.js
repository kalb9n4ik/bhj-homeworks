const book = document.getElementById('book')



book.onclick = (event) => {
	const parentDiv = event.target.closest('div')
	

	if(event.target.classList.contains('font-size')){
		const oldElement = parentDiv.querySelector('.font-size_active')
		if(event.target !== oldElement){
			oldElement.classList.toggle('font-size_active')
			event.target.classList.toggle('font-size_active')
			sizeFont(event.target.dataset.size)
		}
	}

	if(parentDiv.classList.contains('book__control_color')){
		const oldElement = parentDiv.querySelector('.color_active')
		
		if(event.target !== oldElement){
			oldElement.classList.toggle('color_active')
			event.target.classList.toggle('color_active')
			colorText(event.target.dataset.textColor)
		}
	}

	if(parentDiv.classList.contains('book__control_background')){
		const oldElement = parentDiv.querySelector('.color_active')
		
		if(event.target !== oldElement){
			oldElement.classList.toggle('color_active')
			event.target.classList.toggle('color_active')
			backgroundColor(event.target.dataset.bgColor)
		}
	}

	return false
}

function sizeFont(size){
	book.classList.remove('book_fs-big')
	book.classList.remove('book_fs-small')

	if(size === 'big'){
		book.classList.add('book_fs-big')
	} else if(size === 'small'){
		book.classList.add('book_fs-small')
	}
}

function colorText(color){
	book.classList.remove('book_color-black')
	book.classList.remove('book_color-gray')
	book.classList.remove('book_color-whitesmoke')

	if(color === 'gray'){
		book.classList.add('book_color-gray')
	} else if(color === 'whitesmoke'){
		book.classList.add('book_color-whitesmoke')
	} else {
		book.classList.add('book_color-black')
	}
}

function backgroundColor(color){
	book.classList.remove('book_bg-gray')
	book.classList.remove('book_bg-black')
	book.classList.remove('book_bg-white')

	if(color === 'gray'){
		book.classList.add('book_bg-gray')
	} else if(color === 'black'){
		book.classList.add('book_bg-black')
	} else {
		book.classList.add('book_bg-white')
	}
}