import React from 'react';



class LifeCycle extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            score: 0
        }
    }


    componentWillMount(){
        console.log("Called before render")
    }

    componentDidMount(){
        console.log("Called after render")
    }

    componentWillUpdate(){
        console.log("Component Will update")
    }

    componentDidUpdate(){
        console.log("Component Has updated")

    }

   
    checkWhenIAmCalled(){
        console.log("Called in render!")
    }

    changeScore = () =>{
        this.setState({
            score: this.state.score + 1
        })
    }

    render() { 
        return ( 
            <span>
                Component LifeCycle:
                {this.checkWhenIAmCalled()}
                <br></br>    
                Score: {this.state.score} 
                <button onClick={this.changeScore}>Change</button>
                <br></br>
                <hr></hr>
            </span>
         );
    }
}
 
export default LifeCycle;