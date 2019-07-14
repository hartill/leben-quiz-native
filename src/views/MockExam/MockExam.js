import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

import QuizContainer from './../../components/Quiz/QuizContainer'
import QuizFooter from './../../components/Quiz/QuizFooter'
import ExamQuestionOverview from './../../components/MockExam/ExamQuestionOverview'
import Results from './../../components/MockExam/Results'

export default class MockExam extends React.Component {
  constructor(props) {
    super(props)
    this.questions = this.props.questions
    this.state = {
      question: {},
      examProgress: [],
      showAnswer: false,
      selectedAnswer: null,
      examCompleted: false,
      viewProgress: false
    }
    this.numberOfQuestions = this.props.numberOfQuestions
    if (this.props.numberOfQuestions > 300) {
      this.numberOfQuestions = 33
    } else {
      this.numberOfQuestions = 30
    }
    this.handleViewProgress = this.handleViewProgress.bind(this)
    this.onAnswerSelected = this.onAnswerSelected.bind(this);
    this.displayAnswers = this.displayAnswers.bind(this);
    this.generateNextQuestion = this.generateNextQuestion.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.restart = this.restart.bind(this);
  }

  componentWillMount() {
    this.setState({
      question: this.generateNextQuestion(this.questions),
    })

    this.getExamProgress()
  }

  componentDidUpdate(nextProps, nextState) {
    this.saveExamProgress(this.state.examProgress)
  }

  async getExamProgress() {
    try {
      const value = await AsyncStorage.getItem('@LebenStore:examProgress')
      .then(req => JSON.parse(req))
      if (value === null) {
        value = []
      }
      this.setState({examProgress: value})
      if(value.length >= this.numberOfQuestions) {
        this.setState({
          examCompleted: true
        })
      }
    } catch (error) {
      console.log("Error retrieving data" + error)
    }
  }

  async saveExamProgress(value) {
    try {
      await AsyncStorage.setItem('@LebenStore:examProgress', JSON.stringify(value))
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  onAnswerSelected(key, order, questionId) {
    let questionCategory = this.questions[(questionId - 1)].category
    this.setState((prevState, props) => {
      return {
        selectedAnswer: order,
        showAnswer: true
      }
    })
    if (key === 1) {
      let data = {
        questionId: questionId,
        userScore: 1,
        category: questionCategory
      }
      this.setState({
          examProgress: this.state.examProgress.concat([data])
      })
    } else {
      let data = {
        questionId: questionId,
        userScore: 0,
        category: questionCategory
      }
      this.setState({
          examProgress: this.state.examProgress.concat([data])
      })
    }
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
    if (this.state.examProgress.length >= this.numberOfQuestions) {
      this.setState({
        examCompleted: true
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
    let examProgress = [...this.state.examProgress]

    examProgress.sort(function(a, b) {
      return parseFloat(a.questionId) - parseFloat(b.questionId)
    })

    let maxNumber = this.numberOfQuestions > 30 ? 310 : 300
    maxNumber = maxNumber - examProgress.length
    let minNumber = 1
    let randNumber = Math.floor((Math.random() * maxNumber) + minNumber)
    for (let i = 0; i < examProgress.length; i++) {
      if (randNumber >= parseFloat(examProgress[i].questionId)) {
        randNumber += 1
      }
    }
    let randomNumbersIndex = randNumber - 1
    return questions[randomNumbersIndex]
  }

  restart() {
    this.setState((prevState, props) => {
      return {
        examProgress: [],
        examCompleted: false,
        showAnswer: false,
        selectedAnswer: null,
        viewProgress: false
      }
    })
  }

  renderContent() {
    let renderOutput = []
    if (this.state.viewProgress) {
      renderOutput.push(
        <ExamQuestionOverview
          numberOfQuestions={this.numberOfQuestions}
          examProgress={this.state.examProgress}
          key='qo1'
        />
      )
    } else if (this.state.examCompleted) {
      renderOutput.push(
        <Results
          examProgress={this.state.examProgress}
          numberOfQuestions={this.numberOfQuestions}
          key='qo3'
        />
      )
    } else {
      renderOutput.push(
        <QuizContainer
          question={this.state.question}
          onAnswerSelected={this.onAnswerSelected}
          selectedAnswer={this.state.selectedAnswer}
          showAnswer={this.state.showAnswer}
          images = {this.props.images}
          key='qo2'
          mode={2}
        />
      )
    }
    return renderOutput
  }

  render() {
    let title = this.state.viewProgress ? 'Fragenübersicht' : 'Probeprüfung'
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
          progress={this.state.examProgress}
          viewProgress={this.state.viewProgress}
          completed={this.state.examCompleted}
          numberOfQuestions={this.numberOfQuestions}
          restart={this.restart}
          mode={2}
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
