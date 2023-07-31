// poll__title
const poolTitle = document.getElementById('poll__title')
// poll__answers
const poolAnswer = document.getElementById('poll__answers')

const buttons = document.getElementsByTagName('button')

let id = null;
let answerNumber = null;



let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send();

xhr.addEventListener('readystatechange', (e) => {
	if(e.target.readyState === xhr.DONE && e.target.status == 200){

		const responseJson = JSON.parse(xhr.response)
		outputAnswer(responseJson)	
		
	}
})



function outputAnswer(responseJson) {
	id = responseJson.id
	const title = responseJson.data.title
	poolTitle.append(title)

	const answers = responseJson.data.answers
	for(let answer of answers) {
		const button = document.createElement('button')
		button.classList.add('poll__answer')
		button.append(' ' + answer + ' ')
		poolAnswer.appendChild(button)
	}

	

	for(let button of buttons){
		button.addEventListener('click', (e) => {
			alert('Спасибо, ваш голос засчитан!')
			const arrayButton = Array.from(buttons)
			answerNumber = arrayButton.indexOf(e.target)
			const xhr2 = new XMLHttpRequest();
			xhr2.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
			xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
			xhr2.send( `vote=${id}&answer=${answerNumber}` );

			xhr2.addEventListener('readystatechange', (e) => {
				if(e.target.readyState === xhr.DONE){
					const responseJsonStat = JSON.parse(xhr2.response)
					outputStat(responseJsonStat)	
				}
			})


		})
	}

}

function outputStat(responseJsonStat){
	const answers = responseJsonStat.stat
	const state = document.createElement('div')
	for(let answer of answers) {
		const div = document.createElement('div')
		div.append(answer.answer + ': ')
		const b = document.createElement('b')
		b.append(answer.votes + '%')
		div.appendChild(b)
		state.appendChild(div)
	}
	poolAnswer.replaceWith(state)
}

