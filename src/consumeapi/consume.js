import React from 'react';
import axios from "axios";
import User from "./user";

class ConsumeUser extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            users: []
        }

    }

    componentWillMount(){
        this.getRemoteUsers()        
    }

    getRemoteUsers(){
        axios.get('https://jsonplaceholder.typicode.com/users')
                .then(res=>{
                    console.log(res)
                    console.log(res.data)
                    console.log("Before initialize")
                    console.log(this.state.users)
                    this.setState({
                        users: res.data
                    })
                    console.log("After initialize")
                    console.log(this.state.users)

                }, err=>{
                    console.log(err)
                })
    }

    displayUsers=()=>{
        return this.state.users.map(u => {
            console.log("One user")
            return <User
                        name={u.name}
                        username={u.username}
                        email={u.email}
                        city={u.address.city}
                        u={u}
                    ></User>
        })

    }
    
    render() { 
        return ( 
            <div>
                All users from Rest API!
                <br></br>
                {this.displayUsers()}
                <br></br>
                <hr></hr>
            </div>
         );
    }
}
 
export default ConsumeUser;