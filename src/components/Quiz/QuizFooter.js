import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import RenderText from './../RenderText'
import UserProgressBar from './UserProgressBar'

export default class QuizFooter extends React.Component {
  constructor(props) {
    super(props)
    this.renderButton = this.renderButton.bind(this)
  }

  renderButton() {
    let output=[]
    if (this.props.showAnswer) {
      output.push(
        <TouchableHighlight
          onPress={() => {this.props.nextQuestion()}}
          key='qf1'
          style={styles.FooterRight}
        >
          <Icon name="arrow-forward" size={16} color="#fff" />
        </TouchableHighlight>
      )
    } else {
      output.push(
        <TouchableHighlight
          onPress={() => {this.props.displayAnswers()}}
          key='qf2'
          style={styles.FooterRight}
        >
            <RenderText style='p2' text='Ich weiß nicht'/>
        </TouchableHighlight>
      )
    }
    return output
  }

  render() {
    return (
      <View style={styles.FooterContainer}>
        <UserProgressBar
          progress={this.props.progress}
          numberOfQuestions={this.props.numberOfQuestions}
        />
        {this.renderButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  FooterContainer: {
    flexBasis: '12%',
    backgroundColor: '#23212b',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  FooterRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DD5152',
  },
});
