export default class UserRequests {
    static base_url = "https://blog-m2.herokuapp.com/users"
    static token = JSON.parse(localStorage.getItem("@blog-M2:token"))
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async listUserbyId(usuarioId) {
        return await fetch(`${this.base_url}/${usuarioId}`, {
            method: "GET",
            headers: this.headers
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async createUser(dadosCriacaoUsuario) {
        return await fetch(`${this.base_url}/register`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(dadosCriacaoUsuario)
        })
        .then(response => response.json())
            // let status = response.status
            // return {
            //     response: response.json(), 
            //     status: status
            // }
            // return status
            // console.log(response.status)
            
       
        // .then(response => response)
        .catch(err => 
            console.log(err)
        )
    }



}

