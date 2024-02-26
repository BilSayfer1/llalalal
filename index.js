let form = document.forms.signup
let inputs = form.querySelectorAll('input')
let requireds = document.querySelectorAll(`.req`).length
form.onsubmit = (event) => {
    event.preventDefault()
    let errors = 0

    inputs.forEach(inp => {
        let isRequired = inp.parentNode.classList.contains('req')
        let ishave = true

        if (isRequired) {
            ishave = /^(.+)$/.test(inp.value.trim())
        }

        if (!ishave) {
            errors += 1
            inp.parentNode.classList.add('error')
        } else {
            inp.parentNode.classList.remove('error')
        }
    });

    console.log({
        errors,
        success: requireds - errors
    });

    if (errors > 0) {
        alert('Error: Fill in all required fields')
        return
    }

    submit(event.target)
}

function submit(form) {
    let formData = new FormData(form)

    let user = {}

    formData.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}
