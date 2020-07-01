import React from 'react';


class User extends React.Component {
    
    render() { 
        return ( 
            <span>
                <br></br>
                Name: {this.props.name} <br></br>
                UserName: {this.props.username} <br></br>
                Email: {this.props.email} <br></br>
                City: {this.props.city}<br></br>
               
                ----------------------------
            </span>
         );
    }
}
 
export default User;