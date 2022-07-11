import LoginRequest from "./controller/login.controller.js";
import UserRequests from "./controller/user.controller.js";
import PostsRequests from "./controller/posts.controller.js"


const allPosts = await PostsRequests.listAllPosts()

const totalPages = allPosts.totalPages
let todosPost= []
for(let i = 1; i <= totalPages; i++) {
  
  allPosts.nextPage = `page=${i}`
  todosPost.push(...allPosts.data)

}

let mys = []
for(let j = 0; j < todosPost.length; j++) {
  
    if(todosPost[j].user.id === 6016) {
      mys.push(todosPost[j])
    }

}

console.log(allPosts)

