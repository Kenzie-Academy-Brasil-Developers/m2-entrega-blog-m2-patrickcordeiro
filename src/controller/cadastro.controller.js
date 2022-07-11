// import UserRequests from "./user.controller.js";

import UserRequests from "./user.controller.js"
import PostsRequests from "./posts.controller.js";
import LoginRequest from "./login.controller.js";
import Post from "../models/Post.model.js";

export default class Cadastro {

    static formulario = document.querySelector('.formulario')
    static username = document.querySelector('.nome')
    static email = document.querySelector('.email')  
    static avatarUrl = document.querySelector('.foto')  
    static password = document.querySelector('.senha')
    static buttonCadastrar = document.querySelector('.button')

    static cadastrar() {
        this.buttonCadastrar.addEventListener('click', async (event) => {
            event.preventDefault()

            const newUser = await UserRequests.createUser({
                "username": `${this.username.value}`,
                "email": `${this.email.value}`,
                "avatarUrl": `${this.avatarUrl.value}`,
                "password": `${this.password.value}`
            })

        })
    }

}

