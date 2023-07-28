const chatWidget = document.querySelector('.chat-widget')
const input = document.getElementById('chat-widget__input')
const messages = document.querySelector( '.chat-widget__messages' );
const answer = ['Добрый день!',
				'Вы не купили ни одного товара для того, чтобы так с нами разговаривать!',
				'Где ваша совесть?',
				'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
				'Добрый день! До свидания!',
				'Мы ничего не будем вам продавать!',
				'Хорошего дня!']

chatWidget.addEventListener('click', () => chatWidget.classList.add('chat-widget_active'))


let timeoutID = setTimeout(messageTimeout, 30000);

input.addEventListener('keyup', (event) => {
	if (event.key === 'Enter') {
		
        if(input.value){
        	clearTimeout(timeoutID)
        	// вывод сообщения от клиента
        	messageClient()
			// очистка ввода
			input.value = ''
			// вывод сообщения от сотрудника
			messageEmployee()
			// таймер 30 секунд
			timeoutID = setTimeout(messageTimeout, 30000);
		}
    }
})

function getTime(){
	date = new Date()
	return `${date.getHours()}:${date.getMinutes()}`
}

function messageClient(){
	messages.innerHTML += `
		<div class="message message_client">
		<div class="message__time">${getTime()}</div>
		<div class="message__text">${input.value}</div>
		</div>
	`;
	scrollDown()
}

function messageEmployee(){
	const random = Math.floor(Math.random() * 6)
	messages.innerHTML += `
	  <div class="message">
	    <div class="message__time">${getTime()}</div>
	    <div class="message__text">${answer[random]}</div>
	  </div>
	`;
	scrollDown()
}

function messageTimeout() {
	date = new Date()
	const random = Math.floor(Math.random() * 7)
	messages.innerHTML += `
	  <div class="message">
	    <div class="message__time">${getTime()}</div>
	    <div class="message__text">Кто тут?</div>
	  </div>
	`;
	scrollDown()
}

function scrollDown(){

	const lastMessage = document.getElementById('chat-widget__messages').lastElementChild
	lastMessage.scrollIntoView(false)
}