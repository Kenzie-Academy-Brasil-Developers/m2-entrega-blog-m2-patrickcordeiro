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
        const buttonAtualizar = document.createElement('button')

        header.classList.add('header')
        divContainer.classList.add('container')
        divUserData.classList.add('user-data')
        img.classList.add('img-user')
        h2.classList.add('title-user')
        button.classList.add(
            'button',
            'button__primary'
        )
        buttonAtualizar.classList.add(
            'button',
            'button__primary'
        )

        const myUser = await UserRequests.listUserbyId(JSON.parse(localStorage.getItem("@blog-M2:userId")))

        img.src = `${myUser.avatarUrl}`
        img.alt = "Foto Usuário"
        img.classList.add('foto-user')

        button.type = 'button'
        buttonAtualizar.type = 'button'

        h2.innerText = `${myUser.username}`
        
        buttonAtualizar.innerText = 'Atualizar'

        if (JSON.parse(localStorage.getItem("@blog-M2:userId")) === null) {
            button.innerText = 'Login'
            window.location.href = "../../index.html"
        } else {
            button.innerText = "Logout";
            button.addEventListener("click", (event) => {
              event.preventDefault();
              localStorage.removeItem("@blog-M2:userId");
              localStorage.removeItem("@blog-M2:token");
              window.location.href = "../../index.html"
            });
        }

        divUserData.append(img, h2)
        divContainer.append(divUserData, buttonAtualizar, button)
        header.append(divContainer)
        this.body.append(header)

        buttonAtualizar.addEventListener('click', (event) => {
            window.location.reload(true);
        })

    }


    static async postsSection() {
        const main = document.createElement('main');
        const header = document.createElement('header');
        const divContainerPost = document.createElement('div');
        const form = document.createElement('form');
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

        img.src = '../assets/img/botaoMais.png'
        img.alt = 'Botão adicionar post'

        botao.append(img)
        form.append(textArea, botao)
        divContainerPost.append(form)
        header.append(divContainerPost)

        const posts = await PostsRequests.listAllPosts()
        const totalPosts = posts.totalPages

        const sectionPosts = document.createElement('section')
        sectionPosts.classList.add('section-posts')

        const myPosts = posts.data.filter((post) => {
            return post.user.id === JSON.parse(localStorage.getItem("@blog-M2:userId"))
        })

        posts.data.forEach((post) => {
            const newPost = new Post(post.user.avatarUrl, post.user.username, post.content, post.createdAt)
            const cardPost = newPost.createCard(post.id)

            if(post.user.id === (JSON.parse(localStorage.getItem("@blog-M2:userId")))) {
                cardPost.children[2].children[0].style.display = 'flex'
                cardPost.children[2].children[1].style.display = 'flex'
            }
            
            cardPost.id = `${post.id}`
            sectionPosts.append(cardPost)
            
        })

        main.append(header, sectionPosts)
        this.body.append(main)

        let botaoCriarPost = document.querySelector('.container-botao')

        ///vai dar b.o
        botaoCriarPost.addEventListener('click', async (event) => {
            event.preventDefault()
            const newPost = new Post("../src/assets/temp/usuarioLogado.png",'Patrick' ,event.path[2][0].value , new Date())
            await PostsRequests.createPost({
                "content": `${event.path[2][0].value}`
            })
            window.location.reload(true);
            const cardPost = newPost.createCard(newPost)
            
            sectionPosts.append(cardPost)
            
        })

        let botaoEditarPost = document.querySelectorAll('.edit-post')

        botaoEditarPost.forEach((edit) => {
            edit.addEventListener('click', async (event) => {
        
                if(event.target.textContent === 'Editar') {
                    
                    event.target.parentElement.previousSibling.children[1].contentEditable = 'true'
                    event.target.parentElement.previousSibling.children[1].style.border = '1px solid black'
                    event.target.innerText = 'salvar'
                
                } else {
                   await PostsRequests.updatePost(parseInt(event.target.parentElement.parentElement.id), {
                          "content": `${event.target.parentElement.previousSibling.children[1].textContent}`
                    })
                    window.location.reload(true);
                }

            })
        })

        let botaoApagarPost = document.querySelectorAll('.delete-post')

        botaoApagarPost.forEach((edit) => {
            edit.addEventListener('click', async (event) => {
                console.log(event.target.parentElement.parentElement)
                await PostsRequests.deletePost(parseInt(event.target.parentElement.parentElement.id))
                window.location.reload(true);
            })
        })
        
    }

}