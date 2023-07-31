const items = document.getElementById('items')
const loaderImg = document.getElementById('loader')


let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send();

xhr.addEventListener('readystatechange', (e) => {
	if(e.target.readyState === xhr.DONE && e.target.status == 200){

		loaderImg.classList.toggle('loader_active')

		const answer = JSON.parse(xhr.response)
		const valutes = answer.response.Valute
		
		outputCurrency(valutes)
		
	}
})


function outputCurrency(valutes) {
	for(let valute in valutes){

		// item
		const item = document.createElement('div')
		item.classList.add('item')

		// item__code
		const itemCode = document.createElement('div')
		itemCode.classList.add('item__code')
		itemCode.append(valutes[`${valute}`].CharCode)

		// item__value
		const itemValue = document.createElement('div')
		itemValue.classList.add('item__value')
		itemValue.append(valutes[`${valute}`].Value)

		// item__currency
		const itemCurrency = document.createElement('div')
		itemCurrency.classList.add('item__currency')
		itemCurrency.append('руб.')


		item.appendChild(itemCode)
		item.appendChild(itemValue)
		item.appendChild(itemCurrency)
		items.appendChild(item)

	}
}