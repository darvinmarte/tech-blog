const signUpHandler = async function(e){
    e.preventDefault()
    const name = document.querySelector('#username-signup').value.trim()
    const email = document.querySelector('#email-signup').value.trim()
    const password = document.querySelector('#password-signup').value.trim()
    console.log(name, email, password)


    const response = await fetch('/api/users', {
        method: 'POST', 
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        }),
        headers: {'Content-Type': 'application/json'}
    })
    console.log(response)
    if (response.ok) {
        document.location.replace('/homepage')
    } else {
        alert('Failed to sign up!')
    }
}
document.querySelector('.signup-form').addEventListener('submit', signUpHandler)