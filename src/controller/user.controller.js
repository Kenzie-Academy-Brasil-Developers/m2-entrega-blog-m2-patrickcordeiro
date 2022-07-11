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
        try {
            const cadastroUsuario = await fetch(`${this.base_url}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dadosCriacaoUsuario)
            })
            if(cadastroUsuario.status != 201) {
                throw new Error
            }
            const response = await cadastroUsuario.json()
            window.location.href = '../../index.html'
            return response
            
            
        } catch(err) {
            return 
        } 
    }


}

