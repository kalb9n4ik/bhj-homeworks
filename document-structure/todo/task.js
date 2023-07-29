const taskInput = document.getElementById('task__input')
const taskList = document.getElementById('tasks__list')
const taskRemove = document.querySelectorAll('task__remove')

taskInput.addEventListener('keyup', (event) => {
	if(event.key === 'Enter'){

		// вызов функции добавление эл-та
		if(event.target.value){

			addTask(event.target.value)

			// clean input
			event.target.value = ''
		}
		
	}
})

function addTask(text) {
	const task = document.createElement('div')
	task.classList.add('task')

	const taskTitle = document.createElement('div')
	taskTitle.classList.add('task__title')
	taskTitle.textContent = `${text}`;
	task.append(taskTitle)

	const a = document.createElement('a')
	a.classList.add('task__remove')
	a.setAttribute('href', '#')
	a.textContent = '×'
	//const linkContent = document.createTextNode(String.fromCharCode(215))
	//a.append(linkContent)

	task.append(a)

	taskList.append(task)

	a.addEventListener('click', (event) => {
		event.target.closest('div').remove()
	})

}