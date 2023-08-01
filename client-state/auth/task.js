const form = document.forms['signin__form']
const signoutBtn = document.getElementById('signout__btn')

signoutBtn.addEventListener('click', () => {
    delete localStorage.idUser
    welcomeUser()

})

if(localStorage.getItem('idUser')){
    welcomeUser(localStorage.getItem('idUser'))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputLogin = e.currentTarget.getElementsByTagName('input')[0].value
    const inputPassword = e.currentTarget.getElementsByTagName('input')[1].value

    if(inputLogin && inputPassword) {
        sendXHR()
    } else {
        alert('Введите логин и пароль!')
    }
})

function sendXHR(){
    let xhr = new XMLHttpRequest()
    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === xhr.DONE){
            parseJson(xhr.responseText)
        }
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    const formData = new FormData(form)
    xhr.send(formData);
}

function parseJson(json){
    const answer = JSON.parse(json)
    if(answer.success){
        localStorage.setItem('idUser', answer['user_id'])
        welcomeUser(answer['user_id'])
    } else {
        alert('Неверный логин/пароль')
    }
    formClear()
}

function welcomeUser(idUser){
    const signin = document.getElementById('signin')
    const welcome = document.getElementById('welcome')
    const userId = document.getElementById('user_id')
    signin.classList.toggle('signin_active')

    if(idUser){
        userId.textContent = idUser
    }

    welcome.classList.toggle('welcome_active')
}

function formClear(){
    const inputs = document.getElementsByTagName('input')
    for(let input of inputs){
        input.value = ''
    }
}