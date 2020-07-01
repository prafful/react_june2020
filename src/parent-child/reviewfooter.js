import React from 'react';
import ReviewAuthor from './reviewauthor';
import ReviewActions from './reviewaction';

class ReviewFooter extends React.Component {
    
    render() { 
        return (  
            <div>
                <ReviewAuthor author={this.props.author}></ReviewAuthor>
                &nbsp; | &nbsp;
                <ReviewActions likes={this.props.likes} dislikes={this.props.dislikes}></ReviewActions>
            </div>
        );
    }
}
 
export default ReviewFooter;