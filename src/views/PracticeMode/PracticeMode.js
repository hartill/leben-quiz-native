import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

import QuizContainer from './../../components/Quiz/QuizContainer'

export default class PracticeMode extends React.Component {
  constructor(props) {
    super(props)
    this.questions = this.props.questions
    this.numberOfQuestions = this.props.numberOfQuestions
  }
  render() {
    let question = this.questions[1]
    return (
      <View style={styles.AppContainer}>
        <Header title='Trainieren' icons={true}/>
        <QuizContainer question={question}/>
        <View style={styles.FooterContainer}>
          <RenderText style='p2' text='Page Content, screen 2'/>
        </View>
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
  FooterContainer: {
    flexBasis: '12%',
    backgroundColor: '#23212b',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
