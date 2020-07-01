//root component or first component

import React from 'react'

export class FirstComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            likes:31,
            name:"Somename####"
        }
        this.addLikes = this.addLikes.bind(this)
        this.minusLikes = this.minusLikes.bind(this)

    }

    score = 88

    addLikes(){
        console.log("Increase likes for " + this.props.children)
        this.setState({likes: this.state.likes + 1})
    }
    minusLikes(){
        console.log("Decrease likes for " + this.props.children)
        this.setState({likes: this.state.likes - 1})
    }

    message(){
        console.log(this.props)
        return "I am going to JSX!"
    }

    render(){

        let mycss ={
            color:this.props.color,
            fontFamily:'cursive',
            fontSize:this.state.likes+'px'
        }

        return (
            <div>
                <h1 style={mycss}>{this.props.children}</h1>
                <h3>I am {this.props.children} component or root component!!!!</h3>
                <span>Likes: <h1>{this.state.likes}</h1></span>
                <button onClick={this.addLikes}>+</button> 
                <button onClick={this.minusLikes}>-</button>
                <p>Name:  {this.state.name}</p>
                <p>I can call function: {this.message()}</p>
                <p>Variable: {this.score}</p>
                <p>Score from instance: {this.props.score}</p>
                <p>Message from instance: {this.props.message}</p>
                <hr></hr>
            </div>
        )
    }
}
