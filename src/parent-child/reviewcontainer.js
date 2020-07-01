import React from 'react';
import Review from './review';

class ReviewContainer extends React.Component {
   
    render() { 
        return (  
            <span>List of Review Components:
                <br></br>
                <Review title="React Library" author="PD" likes="8" dislikes="2"></Review>
                <Review title="Angular Framework" author="OBB" likes="80" dislikes="22"></Review>
                <Review title="Node.JS SDK" author="CAS" likes="18" dislikes="21"></Review>
                <Review title="AWS" author="BNP" likes="88" dislikes="25"></Review>
                <hr></hr>
                <hr></hr>
            </span>
        );
    }
}
 
export default ReviewContainer;