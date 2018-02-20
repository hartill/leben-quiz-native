import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

import QuizContainer from './../../components/Quiz/QuizContainer'
import QuizFooter from './../../components/Quiz/QuizFooter'
import QuestionOverview from './../../components/Quiz/QuestionOverview'

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

    this.handleViewProgress = this.handleViewProgress.bind(this)
    this.onAnswerSelected = this.onAnswerSelected.bind(this)
    this.displayAnswers = this.displayAnswers.bind(this)
    this.generateNextQuestion = this.generateNextQuestion.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.restart = this.restart.bind(this)
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
      if (value === null) {
        value = []
      }
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
      if (value === null) {
        value = []
      }
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

  handleViewProgress() {
    if (this.state.viewProgress === true) {
      this.setState(prevState => ({
        viewProgress: false
      }))
    } else {
      this.setState(prevState => ({
        viewProgress: true
      }))
    }
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
  //return questions[randomNumbersIndex]
  return questions[54]
}

restart() {
  this.setState((prevState, props) => {
    return {
      progress: [],
      incorrect: [],
      completed: false,
      showAnswer: false,
      selectedAnswer: null
    }
  })
}

renderContent() {
  let renderOutput = []
  if (this.state.viewProgress) {
    renderOutput.push(
      <QuestionOverview
        numberOfQuestions={this.props.numberOfQuestions}
        progress={this.state.progress}
        incorrect={this.state.incorrect}
        key='qo1'
      />
    )
  } else {
    renderOutput.push(
      <QuizContainer
        question={this.state.question}
        onAnswerSelected={this.onAnswerSelected}
        selectedAnswer={this.state.selectedAnswer}
        showAnswer={this.state.showAnswer}
        key='qo2'
      />
    )
  }
  return renderOutput
}

  render() {
    let title = this.state.viewProgress ? 'Fragenübersicht' : 'Trainieren'
    return (
      <View style={styles.AppContainer}>
        <Header
          title={title}
          icons={true}
          viewProgress={this.state.viewProgress}
          handleViewProgress={this.handleViewProgress}
        />
        {this.renderContent()}
        <QuizFooter
          showAnswer={this.state.showAnswer}
          nextQuestion={this.nextQuestion}
          displayAnswers={this.displayAnswers}
          progress={this.state.progress}
          viewProgress={this.state.viewProgress}
          numberOfQuestions={this.props.numberOfQuestions}
          restart={this.restart}
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
