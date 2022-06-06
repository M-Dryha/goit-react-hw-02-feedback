import React, { Component } from "react";
import Section from './Section';
import FeedbackOptions from './Feedback';
import Statistics from './Statistics';
import Notification from './Notification';
export class App extends Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0,
  }
  
  onLeaveFeedback = (e) => {
    const { name } = e.target;
    this.setState((prevState) => {
      return {
         [name]: prevState[name] + 1 ,
      }    
    })
  }

  countTotalFeedback (){
    const { good, bad, neutral } = this.state;
    return bad + neutral + good;
  }
  
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
  
      const total = this.countTotalFeedback();
      const newPercentage = total ? ((good / total)*100).toFixed(0) : 0;

      return Number(newPercentage);
        
   
  }

  render()
  {
    const totalCount = this.countTotalFeedback();
    const newPercentage = this.countPositiveFeedbackPercentage();

       const { good, neutral, bad } = this.state;
  return <div>
 
            <Section title="Please leave feedback">
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback}/>
          </Section>
   
         <Section title='Statistics'>
      {!totalCount ? <Notification message='No feedback given'/> : (
        <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              totalCount= { totalCount}
              newPercentage={newPercentage} />

         )}
            
            </Section>
    </div>
}    

}
  
