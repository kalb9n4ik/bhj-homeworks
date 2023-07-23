const tab = document.querySelectorAll('.tab')


for (let i = 0; i < tab.length; i++) {
	tab[i].addEventListener('click', clickNavi)
}


function clickNavi() {
	// Обертка блока
	const mainBlock = this.closest('.tabs')
	// Массив Навигации
	const tabsNavi = Array.from(mainBlock.querySelectorAll('.tab'))
	// Массив контента
	const tabsContent = Array.from(mainBlock.querySelectorAll('.tab__content'))
	// Индекс активного элемента
	const activeElement = mainBlock.querySelector('.tab_active')
	const activeIndex = tabsNavi.indexOf(activeElement)
	// Индекс новго элемента
	const newIndex = tabsNavi.indexOf(this)

	// Переключение старого класса навигации
	tabsNavi[activeIndex].classList.toggle('tab_active')
	// Переключение старого класса контента
	tabsContent[activeIndex].classList.toggle('tab__content_active')

	// Переключение новго класса навигации
	tabsNavi[newIndex].classList.toggle('tab_active')
	// Переключение нового класса контента
	tabsContent[newIndex].classList.toggle('tab__content_active')

}