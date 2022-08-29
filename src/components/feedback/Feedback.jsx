import React from "react"; 

class Feedback extends React.Component {
state = {
 good: 0,
 neutral: 0,
 bad: 0
}

addGoodFeedback = (event) => {
 this.setState(prevState => ({
    good:prevState.good+1,  
 })); 
};

addNeutralFeedback = (event) => {
    this.setState(prevState => {
    return {
       neutral:prevState.neutral+1,
     };
    }); 
   };
addBadFeedback = (event) => {
    this.setState(prevState => {
    return {
       bad:prevState.bad+1,
     };
    }); 
   };

countTotalFeedback = () => {
  const  total = this.state.good+this.state.neutral+this.state.bad;
    return total;   
}

countPositiveFeedbackPercentage =() => {
   const positivePercentage = (this.state.good*100)/(this.state.good+this.state.neutral+this.state.bad);
   return Math.round(positivePercentage);
}

    render() {
        return (
            <>
            <h1> Plase leave feedback </h1>
            <button type="button" onClick={this.addGoodFeedback}>good</button>

            <button type="button" onClick={this.addNeutralFeedback}>neutral</button>

            <button type="button" onClick={this.addBadFeedback}>bad</button>

            <h2>Statistics</h2>
            <span>Good:{this.state.good}</span> <br />
            <span>Neutral:{this.state.neutral}</span><br />
            <span>Bad:{this.state.bad}</span><br />
            <span>Total: { this.countTotalFeedback()}</span><br />
            <span>Positive feedback:{this.countPositiveFeedbackPercentage()+'%'}</span>

            
            </>
        )
    }; 
}

export default Feedback;