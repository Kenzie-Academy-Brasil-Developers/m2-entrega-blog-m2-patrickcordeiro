import LoginRequest from "./controller/login.controller.js";
import UserRequests from "./controller/user.controller.js";
import PostsRequests from "./controller/posts.controller.js"


// const login = await LoginRequest.login({
//     "email": "churros@kenzie.com.br",
//     "password": "Churros123"
// })

// const newUser = await UserRequests.createUser({
//     "username": "churros",
//     "email": "churros@kenzie.com.br",
//     "avatarUrl": "https://i.pinimg.com/550x/ea/04/03/ea04037f77a6fc584758f618722ce70e.jpg",
//     "password": "Churros123"
// })

// const churrinhos = await UserRequests.listUserbyId(6016)

// console.log(login)
// console.log(newUser)
// console.log(churrinhos)

//POSTSREQUESTS

// const post1 = await PostsRequests.createPost({
//   "content": "Lorem ipsum dolor sit amet. Et iste labore ut similique consequuntur et consequuntur harum est repellendus quia 33 tempore similique. Nam reprehenderit vero eos maxime consequatur At nihil facere vel quam nemo eum perspiciatis maiores qui atque quia."
// })

// const post2 = await PostsRequests.createPost({
//   "content": "Basicamente, o churros não tem uma origem definida, a verdade é que sua origem possui duas teorias. Contudo, se sabe que sua origem é ibérica, e é bastante popular nos países latino-americanos."
// })

// const post3 = await PostsRequests.createPost({
//   "content": "No país, os churros são populares há mais de um século no café da manhã, no lanche, como cura-ressaca e sobremesa. Por lá, serve-se uma meia dúzia bem fininha acompanhada por uma porção de chocolate quente, quase uma ganache."
// })

// const post4 = await PostsRequests.createPost({
//   "content": "A sobremesa não é popular só no Brasil, mas em toda a América Latina, França, Portugal, Estados Unidos, México, Venezuela, Colômbia e nas ilhas Caribenhas. Possui nome diferente em algumas regiões: em Sevilha é chamado de calentito, em Jaén de tallo e em Granada de tejeringo. Em Cuba, é normal encontrar churros com recheio de fruta, na Argentina, Peru, Chile e México com “dulce de leche” ou “cajeta” ou então chocolate e baunilha, e no Uruguai às vezes com queijo derretido."
// })

// const post5 = await PostsRequests.createPost({
//   "content": "O churros existe de diversas formas, podendo ser feito em formatos redondos, ou mais quadrados e longos. Podem também ser de diversos tipos de recheios, a variedade de hoje aumentou, o que antes era feito só de doce de leite e brigadeiro, hoje você já encontra de brigadeiro belga e Nutella, por exemplo."
// })

// const post6 = await PostsRequests.createPost({
//   "content": "Outra teoria sobre a origem da sobremesa é de que os portugueses teriam trazido o churros, com novas técnicas, quando eles partiram do oriente. Porém, as novas técnicas deles fizeram com que modificasse a massa de You Tiao, no sul da China."
// })

// const post7 = await PostsRequests.createPost({
//   "content": "O churros existe de diversas formas, podendo ser feito em formatos redondos, ou mais quadrados e longos. Podem também ser de diversos tipos de recheios, a variedade de hoje aumentou, o que antes era feito só de doce de leite e brigadeiro, hoje você já encontra de brigadeiro belga e Nutella, por exemplo."
// })

// const post8 = await PostsRequests.createPost({
//   "content": "A 'churra' virou hábito: o nome faz menção aos chifres de uma raça de ovelha, criada na província de Castela e Leão."
// })

// const post9 = await PostsRequests.createPost({
//   "content": "Testando 1,2,3..."
// })



// console.log(post1)
// console.log(post2)
// console.log(post3)
// console.log(post4)
// console.log(post5)
// console.log(post6)
// console.log(post7)
// console.log(post8)

const allPosts = await PostsRequests.listAllPosts()

const totalPages = allPosts.totalPages
let todosPost= []
for(let i = 1; i <= totalPages; i++) {
  
  allPosts.nextPage = `page=${i}`
  todosPost.push(...allPosts.data)

}
// console.log(todosPost[0].user.id)
let mys = []
for(let j = 0; j < todosPost.length; j++) {
  
    if(todosPost[j].user.id === 6016) {
      mys.push(todosPost[j])
    }

}

// const post = await PostsRequests.listPostById(4418)
// console.log(mys)
// console.log(post)
console.log(allPosts)
// console.log(post)

// const myPosts = allPosts.data.filter((post) => {
//   return post.user.id == 6016
// })

// console.log(myPosts)

// const postUpdate = await PostsRequests.updatePost(4117, {
//   "content": "Eu sei que atualizou por causa dessa mensagem"
// })

// console.log(postUpdate)

// const deletedPost = await PostsRequests.deletePost(5656)

// console.log(deletedPost)

