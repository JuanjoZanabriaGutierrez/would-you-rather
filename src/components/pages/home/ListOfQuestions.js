import React, { Component, Fragment } from 'react';
import QuestionView from './QuestionView';

class ListOfQuestions extends Component {
    state = {  }
    render() { 
        return (
            <Fragment>
                {[1,2,3].map( () => (
                    <QuestionView key={Math.random() + Math.random()}></QuestionView>
                ))}
            </Fragment>
         );
    }
}
 
export default ListOfQuestions;