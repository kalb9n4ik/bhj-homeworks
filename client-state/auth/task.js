const form = document.forms['signin__form']
const signoutBtn = document.getElementById('signout__btn')

welcomeUser(localStorage.getItem('idUser'))

signoutBtn.addEventListener('click', () => {
    delete localStorage.idUser
    welcomeUser()
})

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
    xhr.addEventListener('load', () => {
        // parseJson(xhr.responseText)
        if(xhr.response.success){
            localStorage.setItem('idUser', xhr.response['user_id'])
            welcomeUser(xhr.response['user_id'])
        } else {
            alert('Неверный логин/пароль')
        }
        form.reset()
    })

    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth')
    const formData = new FormData(form)
    xhr.responseType = 'json';
    xhr.send(formData);

}

function welcomeUser(idUser){
    if(idUser !== null) {
        const signin = document.getElementById('signin')
        const welcome = document.getElementById('welcome')
        const userId = document.getElementById('user_id')
        
        signin.classList.toggle('signin_active')
        welcome.classList.toggle('welcome_active')

        userId.textContent = idUser
    }
}