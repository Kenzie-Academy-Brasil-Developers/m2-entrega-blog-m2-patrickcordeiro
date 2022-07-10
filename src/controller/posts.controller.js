export default class PostsRequests {
    static base_url = "https://blog-m2.herokuapp.com"
    static token = JSON.parse(localStorage.getItem("@blog-M2:token"))
    static headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`
    }

    static async createPost(contentPost) {
        return await fetch(`${this.base_url}/posts`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(contentPost)
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async listAllPosts(id) {
        return await fetch(`${this.base_url}/posts?page=${id}`, {
            method: "GET",
            headers: this.headers
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async listPostById(post_id) {
        return await fetch(`${this.base_url}/posts/${post_id}`, {
            method: "GET",
            headers: this.headers
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async updatePost(post_id, contentPost) {
        return await fetch(`${this.base_url}/posts/${post_id}`, {
            method: "PATCH",
            headers: this.headers,
            body: JSON.stringify(contentPost)
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

    static async deletePost(post_id) {
        return await fetch(`${this.base_url}/posts/${post_id}`, {
          method: "DELETE",
          headers: this.headers
        })
        .then(response => response.json())
        .catch(err => console.log(err))
    }

}