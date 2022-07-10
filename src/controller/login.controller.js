export default class LoginRequest {
    static base_url = 'https://blog-m2.herokuapp.com/users'

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
            localStorage.setItem("@blog-M2:userId", JSON.stringify(response.userId))
            localStorage.setItem("@blog-M2:token", JSON.stringify(response.token))

            return response
        })
        .catch(err => console.log(err))
    }
}