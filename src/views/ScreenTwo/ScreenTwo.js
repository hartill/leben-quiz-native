import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

import QuizContainer from './../../components/Quiz/QuizContainer'
import quizQuestions from './../../data/quizQuestions'

export default class ScreenTwo extends React.Component {
  render() {
    let question = quizQuestions[1]
    return (
      <View style={styles.AppContainer}>
        <Header title='Screen Two' icons={true}/>
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
