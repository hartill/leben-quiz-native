import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import RenderText from './../RenderText'

export default class UserProgressBar extends React.Component {
  constructor(props) {
    super(props)
    let userProgressRight
    let userProgressColor
  }

  render() {
    let userProgress = this.props.progress === null ? 0 : this.props.progress.length
    let numberOfQuestions = this.props.numberOfQuestions
    let userProgressPercent = Math.round(100 - (userProgress / numberOfQuestions * 100))
    this.userProgressRight = String(userProgressPercent) + '%'
    this.userProgressColor = this.props.mode === 2 ? '#11a6ce' : '#2CC990'
    return (
      <View style={styles.FooterLeft}>
        <View style={[styles.UserProgress, {right: this.userProgressRight}, {backgroundColor: this.userProgressColor}]} />
        <RenderText style='p2' text={userProgress + ' / ' + numberOfQuestions}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  FooterLeft: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  UserProgress: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#2CC990',
  },
});
