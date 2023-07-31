const loginHandler = async function(e){
    e.preventDefault()
    // const name = document.querySelector('#username-login').value.trim()
    const email = document.querySelector('#email-login').value
    const password = document.querySelector('#password-login').value
    console.log(email, password)


    const response = await fetch('/api/users/login', {
        method: 'POST', 
        body: JSON.stringify({
            // name: name,
            email: email,
            password: password
        }),
        headers: {'Content-Type': 'application/json'}
    })
    console.log(response)
    if (response.ok) {
        document.location.replace('/homepage')
    } else {
        alert('Failed to login up!')
    }
}
document.querySelector('.login-form').addEventListener('submit', loginHandler)