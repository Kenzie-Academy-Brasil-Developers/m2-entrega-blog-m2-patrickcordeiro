export default class LoginRequest {
    static base_url = 'https://blog-m2.herokuapp.com/users'

    static email = document.querySelector('.email')
    static password = document.querySelector('.senha')
    static buttonCadastrar = document.querySelector('.button')


    static async login(dadosLogin) {
        return await fetch(`${this.base_url}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosLogin)
        })
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            // console.log(response)
            localStorage.setItem("@blog-M2:userId", JSON.stringify(response.userId))
            localStorage.setItem("@blog-M2:token", JSON.stringify(response.token))

            return response
        })
        .catch(err => console.log(err))
    }

    static realizarLogin() {
        this.buttonCadastrar.addEventListener('click', async (event) => {
            event.preventDefault()
            console.log(this.email.value)
            await LoginRequest.login({
                "email": `${this.email.value}`,
                "password": `${this.password.value}`
            })
            window.location.href = "./src/views/homepage.html"

        })
    }

}