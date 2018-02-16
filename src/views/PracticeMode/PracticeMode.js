import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

import QuizContainer from './../../components/Quiz/QuizContainer'
import QuizFooter from './../../components/Quiz/QuizFooter'

export default class PracticeMode extends React.Component {
  constructor(props) {
    super(props)
    this.questions = this.props.questions
    this.numberOfQuestions = this.props.numberOfQuestions
    this.state = {
      question: {},
      completed: false,
      viewProgress: false,
      progress: [],
      incorrect: [],
      selectedAnswer: null,
      showAnswer: false,
    }

    //this.handleViewProgress = this.handleViewProgress.bind(this)
    this.onAnswerSelected = this.onAnswerSelected.bind(this)
    this.displayAnswers = this.displayAnswers.bind(this)
    this.generateNextQuestion = this.generateNextQuestion.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    //this.restart = this.restart.bind(this)
  }

  componentWillMount() {
    this.setState({
      question: this.generateNextQuestion(this.questions),
    })
    this.getProgress()
    this.getIncorrect()
  }

  componentDidUpdate(nextProps, nextState) {
    this.state.progress.sort(function (a, b){return a-b})
    this.state.incorrect.sort(function (a, b){return a-b})
    this.saveProgress(this.state.progress)
    this.saveIncorrect(this.state.incorrect)
  }

  async getProgress() {
    try {
      const value = await AsyncStorage.getItem('@LebenStore:progress')
      .then(req => JSON.parse(req))
      this.setState({progress: value})
    } catch (error) {
      console.log("Error retrieving data" + error)
    }
  }

  async saveProgress(value) {
    try {
      await AsyncStorage.setItem('@LebenStore:progress', JSON.stringify(value))
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  async getIncorrect() {
    try {
      const value = await AsyncStorage.getItem('@LebenStore:incorrect')
      .then(req => JSON.parse(req))
      this.setState({incorrect: value})
    } catch (error) {
      console.log("Error retrieving data" + error)
    }
  }

  async saveIncorrect(value) {
    try {
      await AsyncStorage.setItem('@LebenStore:incorrect', JSON.stringify(value))
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  onAnswerSelected(key, order, questionId) {
    this.setState((prevState, props) => {
      return {
        selectedAnswer: order,
        showAnswer: true
      }
    })
    if (key === 1) {
      this.setState({
          progress: this.state.progress.concat([questionId])
      })
    } else {
      this.setState({
          incorrect: this.state.incorrect.concat([questionId])
      })
    }
    this.displayAnswers()
  }

  displayAnswers() {
    this.setState(prevState => ({
      showAnswer: true
    }))
  }

  nextQuestion() {
    if (this.state.progress.length >= this.numberOfQuestions) {
      this.setState({
        completed: true
      })
    } else {
      this.setState((prevState, props) => {
        return {
          question: this.generateNextQuestion(this.questions),
          selectedAnswer: null,
          showAnswer: false
        }
      })
    }
  }

generateNextQuestion(questions) {
  let correctAnswers = this.state.progress
  let maxNumber = this.numberOfQuestions - correctAnswers.length
  let minNumber = 1
  let randNumber = Math.floor((Math.random() * maxNumber) + minNumber);
  for (let i = 0; i < correctAnswers.length; i++) {
    if (randNumber >= correctAnswers[i]) {
      randNumber += 1
    }
  }
  let randomNumbersIndex = randNumber - 1
  return questions[randomNumbersIndex]
}

  render() {
    return (
      <View style={styles.AppContainer}>
        <Header title='Trainieren' icons={true}/>
        <QuizContainer
          question={this.state.question}
          onAnswerSelected={this.onAnswerSelected}
          selectedAnswer={this.state.selectedAnswer}
          showAnswer={this.state.showAnswer}
        />
        <QuizFooter
          showAnswer={this.state.showAnswer}
          nextQuestion={this.nextQuestion}
          displayAnswers={this.displayAnswers}
          progress={this.state.progress}
          numberOfQuestions={this.props.numberOfQuestions}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: '#3e4651',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
