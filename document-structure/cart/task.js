const productQuantityControls = document.querySelectorAll('.product__quantity-controls')
const cartProducts = document.querySelector('.cart__products')
const productsInCart = document.getElementsByClassName('cart__product')


for (let productQuantityControl of productQuantityControls) {
	const minus = productQuantityControl.firstElementChild
	const plus = productQuantityControl.lastElementChild
	const add = productQuantityControl.nextElementSibling

	minus.addEventListener('click', (event) => {

		if(event.target.parentElement.querySelector('.product__quantity-value').textContent > 1){
			event.target.parentElement.querySelector('.product__quantity-value').textContent--
		}
		
	})
	plus.addEventListener('click', () => {
		event.target.parentElement.querySelector('.product__quantity-value').textContent++
	})

	add.addEventListener('click', (event) => {
		let flag = 0;
		let index = null;

		const arrayCart = Array.from(productsInCart)
		const addQuantity = event.target.closest('div.product').querySelector('.product__quantity-value').textContent

		if(productsInCart.length === 0){
			addCartProduct(event.target.closest('div.product'), event.target.closest('div.product').querySelector('.product__quantity-value').textContent)
		} else {
			let i = 0
			 for(let productInCart of productsInCart){
				if(productInCart.dataset.id === event.target.closest('div.product').dataset.id){
					flag++;
					index = i;
				}
				i++
			}

			if(flag === 0){
				addCartProduct(event.target.closest('div.product'), addQuantity)
			} else {
				const oldQuantity = productsInCart[index].querySelector('.cart__product-count').textContent
				productsInCart[index].querySelector('.cart__product-count').textContent = Number(oldQuantity) + Number(addQuantity)
			}
		}
		
	})
}

function addCartProduct(product, count) {

	const cartProduct = product.cloneNode(true)
	cartProduct.querySelector('h3').remove()
	cartProduct.querySelector('.product__controls').remove()

	cartProduct.classList.remove('product')
	cartProduct.classList.add('cart__product')

	cartProduct.querySelector('img').classList.remove('product__image')
	cartProduct.querySelector('img').classList.add('cart__product-image')


	const cartProductCount = document.createElement('div')
	cartProductCount.classList.add('cart__product-count')
	cartProductCount.textContent = `${count}`


	cartProduct.appendChild(cartProductCount)
	cartProducts.appendChild(cartProduct)
}