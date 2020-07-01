import React from 'react';

class ReviewActions extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            likes:parseInt(this.props.likes),
            dislikes: parseInt(this.props.dislikes)
        }
        this.changeLikes = this.changeLikes.bind(this)
        this.changeDisLikes = this.changeDisLikes.bind(this)

    }

    changeLikes(){
        this.setState({
            likes: this.state.likes + 1
        })
    }

    changeDisLikes(){
        this.setState({
            dislikes: this.state.dislikes + 1
        })
    }
   
    render() { 
        return ( 
            <span>
                {this.state.likes} <button onClick={this.changeLikes}>+</button>
                &nbsp;
                {this.state.dislikes}  <button onClick={this.changeDisLikes}>-</button>
            </span>
         );
    }
}
 
export default ReviewActions;