const editor = document.getElementById('editor')
const clear = document.getElementById('editor__clear')

const historyEditor = localStorage.getItem('editor')

if(historyEditor){
	editor.value = historyEditor;
}
editor.addEventListener('input', (e) => {
	//console.log(e.target.value)
	localStorage.setItem('editor', e.target.value)
})

clear.addEventListener('click', () => {
	editor.value = ''
	delete localStorage.editor;
})