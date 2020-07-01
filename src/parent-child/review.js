import React from 'react';
import ReviewTitle from './reviewtitle';
import ReviewDescription from './reviewdescription';
import ReviewFooter from './reviewfooter';


class Review extends React.Component {
    
    render() { 
        return (
            <div>
                <ReviewTitle mytitle={this.props.title}></ReviewTitle>
                <ReviewDescription></ReviewDescription>
                <ReviewFooter author={this.props.author} likes={this.props.likes} dislikes={this.props.dislikes}></ReviewFooter>
                -------------------------------------------------------
            </div>
          );
    }
}
 
export default Review;