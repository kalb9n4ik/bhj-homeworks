const taskList = document.getElementById('tasks__list')
const taskRemove = document.querySelectorAll('task__remove')
const form = document.forms['tasks__form']

form.addEventListener('submit', (event) => {
	event.preventDefault()

	const inputText = event.currentTarget.querySelector('input').value
	addTask(inputText)

	form.reset()

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