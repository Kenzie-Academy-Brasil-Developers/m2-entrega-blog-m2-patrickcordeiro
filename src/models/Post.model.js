export default class Post {
    constructor(userImage, userName, contentPost, date) {
        this.userImage = userImage
        this.userName = userName
        this.contentPost = contentPost
        this.date = date
    }

    createCard(idPost) {
        const cardPost = document.createElement("div");
        const imgUser = document.createElement("img");
        const divInfoPost = document.createElement("div");
        const tituloPost = document.createElement("h3");
        const textoPost = document.createElement("p");
        const divInfoPost2 = document.createElement("div");
        const editPost = document.createElement('span')
        const deletePost = document.createElement('button')
        const datePost = document.createElement('span')


        cardPost.classList.add('card-post')
        imgUser.classList.add('foto-user')
        divInfoPost.classList.add('info-post')
        tituloPost.classList.add('titulo-post')
        textoPost.classList.add('texto-post')
        divInfoPost2.classList.add('info2-post')
        editPost.classList.add('edit-post')
        deletePost.classList.add('delete-post')
        datePost.classList.add('date-post')

        imgUser.src = this.userImage
        imgUser.alt = "Foto user"
        tituloPost.innerText = this.userName
        textoPost.innerText = this.contentPost
        editPost.innerText = 'Editar'
        deletePost.innerText = 'Apagar'
        datePost.innerText = this.arrumarData(this.date)

        editPost.style.display = 'none'
        deletePost.style.display = 'none'

        deletePost.type = 'button'

        
        divInfoPost2.append(editPost, deletePost, datePost)
        divInfoPost.append(tituloPost, textoPost)
        cardPost.append(imgUser, divInfoPost, divInfoPost2)

        return cardPost

    }


    arrumarData(data){
        let dataArrumada = data.split('T')
        let dataArrumada2 = dataArrumada[0].split('-')

        let ano = dataArrumada2[0]
        let mes = dataArrumada2[1]
        let dia = dataArrumada2[2]

        return `${dia}/${mes}/${ano}`
    }

}

