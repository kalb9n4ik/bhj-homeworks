const inputs = document.querySelectorAll('div.interests > ul > li > label > input')

for(let input of inputs){
	input.addEventListener('click', () => {
			const children = input.closest('li').querySelectorAll('ul.interests > li > label > input')

			for(let child of children) {
				if(input.checked){
					child.checked = true
				} else {
					child.checked = false
				}
			}
		
	})
}