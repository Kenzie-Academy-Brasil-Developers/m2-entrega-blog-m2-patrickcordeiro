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
            // console.log(this.username.value)
            // console.log(this.email.value)
            // console.log(this.avatarUrl.value)
            // console.log(this.password.value)
            const newUser = await UserRequests.createUser({
                "username": `${this.username.value}`,
                "email": `${this.email.value}`,
                "avatarUrl": `${this.avatarUrl.value}`,
                "password": `${this.password.value}`
            })
            // window.location.href = "../temp/login.html"

            // if(newUser === 200) {
            //     window.location.href = "../temp/login.html"
            // }
            console.log(newUser)


            
            // let httpResponse = (HttpWebResponse)request.GetResponse();
            // var xhttp = new XMLHttpRequest()
            // console.dir(xhttp)
            // console.log()

        })
    }
    


}


// const newUser = await UserRequests.createUser({
//     "username": "churros",
//     "email": "churros@kenzie.com.br",
//     "avatarUrl": "https://i.pinimg.com/550x/ea/04/03/ea04037f77a6fc584758f618722ce70e.jpg",
//     "password": "Churros123"
// })