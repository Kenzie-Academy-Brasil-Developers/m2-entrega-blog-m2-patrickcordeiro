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
            // console.log(response)
            return response.json()
        })
        .then((response) => {

            // console.log(response.token)
            // console.log(response.userId)
            localStorage.setItem("@blog-M2:userId", JSON.stringify(response.userId))
            localStorage.setItem("@blog-M2:token", JSON.stringify(response.token))

            return response
        })
        .catch(err => console.log(err))
    }

    static realizarLogin() {
        this.buttonCadastrar.addEventListener('click', async (event) => {
            event.preventDefault()
            // console.log(this.username.value)
            // console.log(this.email.value)
            // console.log(this.avatarUrl.value)
            // console.log(this.password.value)
            // const newUser = await UserRequests.createUser({
            //     "username": `${this.username.value}`,
            //     "email": `${this.email.value}`,
            //     "avatarUrl": `${this.avatarUrl.value}`,
            //     "password": `${this.password.value}`
            // })

            const login = await LoginRequest.login({
                "email": `${this.email.value}`,
                "password": `${this.password.value}`
            })
            console.log(login)
            window.location.href = "../../index.html"
            // if(newUser.status === 200) {
            //     window.location.href = "../temp/login.html"
            // }
            


            
            // let httpResponse = (HttpWebResponse)request.GetResponse();
            // var xhttp = new XMLHttpRequest()
            // console.dir(xhttp)
            // console.log()

        })
    }

}