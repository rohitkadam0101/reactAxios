import React, { Component } from 'react';
import axios from 'axios';
class PostForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId:'',
            title:'',
            body:''
        }
    }
    changeHandler = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{console.log(response)})
        .catch(error=>console.log(error))
    }
    render(){
        const {userId, title, body} = this.state
        return(
            <div>
                <h1>Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div><label>Name: </label><input type='text' name = 'userId' value={userId} onChange={this.changeHandler} ></input></div>
                    <div><label>Title: </label><input type='text' name = 'title' value={title} onChange={this.changeHandler}></input></div>
                    <div><label>Body: </label><input type='text' name = 'body' value={body} onChange={this.changeHandler}></input></div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}
export default PostForm