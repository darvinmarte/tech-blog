const signUpHandler = async function(e){
    e.preventDefault()
    const name = document.querySelector('#username-signup')
    const email = document.querySelector('#email-signup')
    const password = document.querySelector('#password-signup')


    const response = await fetch('/api/users', {
        method: 'post', 
        body: JSON.stringify({
            name: name.value,
            email: email.value,
            password: password.value
        }),
        Headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) {
        document.location.replace('/homepage')
    } else {
        alert('Failed to sign up!')
    }
}
document.querySelector('.signup-form').addEventListener('submit', signUpHandler)