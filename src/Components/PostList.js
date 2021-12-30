import React, { Component } from 'react';
import axios from 'axios'
class PostList extends Component{
    constructor(props){
        super(props)
        this.state = {
            posts:[],
            errorMsg:''
        }
    }
    componentDidMount(){
        // Performing GET request using axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            console.log(response)
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                errorMsg:'Error retireving the URL'
            })
        })
    }

    render(){
        const {posts,errorMsg} = this.state
        return(
            <div>
                Lists of Posts
                {
                    posts.length ?
                    posts.map(post=><div key = {post.id}>{post.title}</div>):
                    null
                }
                <h1>Connected to PostList</h1>
                {
                    errorMsg?<p>{errorMsg}</p>:
                    null
                }
            </div>
        )
    }

}
export default PostList;