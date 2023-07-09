let menuMainLinks = document.querySelectorAll('ul.menu_main > li > a')


for (let i = 0; i  <  menuMainLinks.length; i++) {
	menuMainLinks[i].onclick = () => {
		let subMenu = menuMainLinks[i].closest('.menu__item').querySelector('ul');

		if (subMenu) {
			let subMenuActive = document.querySelector('ul.menu_active')
			if(subMenuActive) {
				subMenuActive.classList.toggle('menu_active')
			}
			subMenu.classList.toggle('menu_active')
			return false; 
		}
	}
			
}