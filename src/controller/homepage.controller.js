import PostsRequests from "./posts.controller.js";
import LoginRequest from "./login.controller.js";
import UserRequests from "./user.controller.js";
import Post from "../models/Post.model.js";

export default class ComponentsDom {
    static body = document.querySelector('body')
    
    static async header() {
        const header = document.createElement('header')
        const divContainer = document.createElement('div')
        const divUserData = document.createElement('div')
        const img = document.createElement('img')
        const h2 = document.createElement('h2')
        const button = document.createElement('button')


        header.classList.add('header')
        divContainer.classList.add('container')
        divUserData.classList.add('user-data')
        img.classList.add('img-user')
        h2.classList.add('title-user')
        button.classList.add(
            'button',
            'button__primary'
        )

        const myUser = await UserRequests.listUserbyId(JSON.parse(localStorage.getItem("@blog-M2:userId")))

        console.log(myUser)


        img.src = `${myUser.avatarUrl}`
        img.alt = "Foto Usuário"
        img.classList.add('foto-user')

        button.type = 'button'
        
        if (JSON.parse(localStorage.getItem("@blog-M2:userId")) === null) {
            button.innerText = "Login";
            img.src = "https://logosmarcas.net/wp-content/uploads/2020/04/Facebook-Logo.png"
            
            // button.addEventListener("click", (event) => {
            //   const modal = document.querySelector(".modal__login");
            //   modal.style.display = "flex";
            // });
            // buttonAdmin.style.display = "none";
        } else {
            button.innerText = "Logout";
            button.addEventListener("click", (event) => {
              event.preventDefault();
              localStorage.removeItem("@blog-M2:userId");
              localStorage.removeItem("@blog-M2:token");
              window.location.reload(true);
            });
            // buttonAdmin.style.display = "flex";
        }

        divUserData.append(img, h2)
        divContainer.append(divUserData, button)
        header.append(divContainer)
        this.body.append(header)

        
    }


    static async postsSection() {
        const main = document.createElement('main');
        const header = document.createElement('header');
        const divContainerPost = document.createElement('div');
        const form = document.createElement('form');
        // const divContainerBotao = document.createElement('div');
        const botao = document.createElement('button')
        const textArea = document.createElement('textarea');
        const img = document.createElement('img');

        main.classList.add('main')
        header.classList.add('header-post')
        divContainerPost.classList.add('container-post')
        form.classList.add('form-post')
        botao.classList.add('container-botao')
        botao.type = 'submit'
        textArea.classList.add('text-area--post')
        img.classList.add('botao-add')

        textArea.cols = '30'
        textArea.rows = '10'
        textArea.placeholder = 'Comece seu post incrível!'

        img.src = '../src/assets/temp/botaoMais.png'
        img.alt = 'Botão adicionar post'

        botao.append(img)
        form.append(textArea, botao)
        divContainerPost.append(form)
        header.append(divContainerPost)

        
        

        // const teste = await PostsRequests.listAllPosts()

        const posts = await PostsRequests.listAllPosts()
        const totalPosts = posts.totalPages
        
        // console.log(posts.data)
        // console.log(teste)
        // console.log(totalPosts)
    

        const sectionPosts = document.createElement('section')
        sectionPosts.classList.add('section-posts')

        const myPosts = posts.data.filter((post) => {
            return post.user.id === JSON.parse(localStorage.getItem("@blog-M2:userId"))
        })

        console.log(myPosts)

        posts.data.forEach((post) => {
            const newPost = new Post(post.user.avatarUrl, post.user.username, post.content, post.createdAt)
            const cardPost = newPost.createCard(post.id)

            // console.log(post.user.id === (JSON.parse(localStorage.getItem("@blog-M2:userId"))))
            // console.log(post.user.username === cardPost.children[1].firstChild.textContent)
            // console.log(cardPost)
            // console.log(post.user.id)

            if(post.user.id === (JSON.parse(localStorage.getItem("@blog-M2:userId")))) {
                cardPost.children[2].children[0].style.display = 'flex'
                cardPost.children[2].children[1].style.display = 'flex'
            }
            // const editPost = document.querySelector('.edit-post')
            // const deletePost = document.querySelector('.delete-post')
            // if(post.user.id === cardPost.children[1].firstChild.textContent) {
            //     editPost.style.display = 'flex'
            //     deletePost.style.display = 'flex'
            // }
            cardPost.id = `${post.id}`
            sectionPosts.append(cardPost)
            
        })


        

        main.append(header, sectionPosts)
        this.body.append(main)
        

        // if(JSON.parse(localStorage.getItem("@blog-M2:userId")) === null) {
        //     header.style.display = 'none'
        // } else {
        //     header.style.display = 'flex'
        // }

        let botaoCriarPost = document.querySelector('.container-botao')

        // console.log(botaoCriarPost)
        
        // console.log(cardLateral)
        botaoCriarPost.addEventListener('click', async(event) => {
            event.preventDefault()
            const newPost = new Post("../src/assets/temp/usuarioLogado.png",'Patrick' ,event.path[2][0].value , new Date())
            console.log(newPost)
            await PostsRequests.createPost({
                "content": `${event.path[2][0].value}`
            })
            const cardPost = newPost.createCard(newPost)
            
            
            sectionPosts.append(cardPost)
            
            window.location.reload(true);
            
        })

        let botaoApagar = document.querySelector('.delete-post')

        // console.log(botaoApagar.parentElement.parentElement.id)
        // console.log(botaoApagar)

        // botaoApagar.addEventListener('click', (event) => {
        //     // event.preventDefault()
        //     // console.log(event)
        //     // await PostsRequests.deletePost(5658)
        //     // window.location.reload(true);
        //     // const deletedPost = await PostsRequests.deletePost(5656)
        // })
    }



}