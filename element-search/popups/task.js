const modalMain = document.getElementById('modal_main')
const modalSuccess = document.getElementById('modal_success')

// открываем modal_main при загрузке скрипта
modalMain.classList.add('modal_active')


// слушаем все div-элемнты для закрытия окна
const closeModal = document.querySelectorAll('div.modal__close')
for(let i = 0; i < closeModal.length; i++) {
	closeModal[i].onclick = () => closeModal[i].closest('.modal').classList.remove('modal_active')
}


// слушаем ссылку 
const openModalSuccess = document.querySelector('a.show-success')
openModalSuccess.onclick = () => {
	openModalSuccess.closest('.modal').classList.remove('modal_active')
	modalSuccess.classList.add('modal_active')
}

