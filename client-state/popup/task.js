const subscribeModal = document.getElementById('subscribe-modal')
const closeModal = document.querySelectorAll('div.modal__close')

//setCookie('flagSubscribeModal', 'open')

if(!getCookie('flagSubscribeModal')){
	// открываем subscribe-modal
	subscribeModal.classList.add('modal_active')
	setCookie('flagSubscribeModal', 'open')
}



// слушаем все div-элемнты для закрытия окна
for(let i = 0; i < closeModal.length; i++) {
	closeModal[i].onclick = () => closeModal[i].closest('.modal').classList.remove('modal_active')
	// установка куки
	setCookie('flagSubscribeModal', 'close')
}



function setCookie(name, value) {
	document.cookie = name + '=' + encodeURIComponent(value)
}

function getCookie(name) {
	const pairs = document.cookie.split('; ')
	const cookie = pairs.find(p => p.startsWith(name + '='))
	if(!cookie){
		return null
	}
	return cookie.substring(name.length + 1)
}