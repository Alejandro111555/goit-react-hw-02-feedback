import { Box } from './theme/Box';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/ButtonFeedback';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((total, item) => total + item, 0);
  };

  countPercentagePositiveFeedback = () => {
    return Math.round(
      this.countTotalFeedback() &&
        (this.state.good * 100) / this.countTotalFeedback()
    );
  };

  render() {
    const keyObject = Object.keys(this.state);
    return (
      <Box p="15px" backgroundColor="#d4d3d3bc" width="300px">
        <Box mb="20px">
          <Section title="Please leave feedback">
            <FeedbackOptions
              option={keyObject}
              onLeaveFeedback={this.onLeaveFeedback}
            />
          </Section>
        </Box>
        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              onPositivePercentage={this.countPercentagePositiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
    );
  }
}
