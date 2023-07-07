

getHole = index => document.getElementById(`hole${index}`)
let arrHole = [];
for(let i = 1; i < 10; i++) {
	arrHole.push(getHole(i))
	arrHole[i - 1].onclick = () => {

		if(arrHole[i - 1].classList.contains('hole_has-mole')) {
			countDead++
			dead.textContent = countDead
		} else {
			countLost++
			lost.textContent = countLost
		}
		
		finishGame()
	}
}

function finishGame() {

	if(countLost === 5) {
			alert("Вы проиграли!")
			clearGame()
		}
	if(countDead === 10) {
			alert("Вы выиграли!")
			clearGame()
		}
}

function clearGame() {
	lost.textContent = 0
	dead.textContent = 0
	countDead = 0
	countLost = 0
}

const dead = document.getElementById("dead")
const lost = document.getElementById("lost")
let countDead = 0
let countLost = 0
