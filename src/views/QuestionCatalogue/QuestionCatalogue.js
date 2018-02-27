import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

import QuizContainer from './../../components/Quiz/QuizContainer'
import QCFooter from './../../components/QuestionCatalogue/QCFooter'
import QCOverview from './../../components/QuestionCatalogue/QCOverview'

export default class QuestionCatalogue extends React.Component {
  constructor(props) {
    super(props)
    this.questions = this.props.questions
    this.numberOfQuestions = this.props.numberOfQuestions
    this.state = {
      question: {},
      viewProgress: false,
      selectedAnswer: null,
      showAnswer: true,
    }

    this.onAnswerSelected = this.onAnswerSelected.bind(this)
    this.displayAnswers = this.displayAnswers.bind(this)
    this.handleViewProgress = this.handleViewProgress.bind(this)
    this.nextQuestion = this.nextQuestion.bind(this)
    this.handleQuestionSelected = this.handleQuestionSelected.bind(this)
  }

  componentWillMount() {
    this.setState({
      question: this.questions[0],
    })
  }

  handleQuestionSelected(questionId) {
    this.setState({
      viewProgress: false,
      selectedAnswer: null,
      showAnswer: true,
      question: this.questions[(questionId - 1)]
    })
  }

  onAnswerSelected(key, order, questionId) {
    this.setState((prevState, props) => {
      return {
        selectedAnswer: order,
        showAnswer: true
      }
    })
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
    this.setState((prevState, props) => {
      let nextQuestion = parseFloat(prevState.question.id)
      if (nextQuestion >= this.numberOfQuestions) {
        nextQuestion = 0
      }
      return {
        question: this.questions[nextQuestion],
        selectedAnswer: null,
        showAnswer: true,
        viewProgress: false
      }
    })
  }

  renderContent() {
    let renderOutput = []
    if (this.state.viewProgress) {
      renderOutput.push(
        <QCOverview
          numberOfQuestions={this.props.numberOfQuestions}
          question={this.state.question}
          handleQuestionSelected={this.handleQuestionSelected}
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
          mode={3}
        />
      )
    }
    return renderOutput
  }

  render() {
    let title = this.state.viewProgress ? 'Fragenübersicht' : 'Fragenkatalog'
    return (
      <View style={styles.AppContainer}>
        <Header
          title={title}
          icons={true}
          viewProgress={this.state.viewProgress}
          handleViewProgress={this.handleViewProgress}
        />
        {this.renderContent()}
        <QCFooter
          nextQuestion={this.nextQuestion}
        />
      </View>
    )
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
