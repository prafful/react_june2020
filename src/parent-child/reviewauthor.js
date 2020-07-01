import React from 'react';

class ReviewAuthor extends React.Component {
    
    render() { 
        return ( 
            <span>
                Posted by: {this.props.author}
            </span>
         );
    }
}
 
export default ReviewAuthor;