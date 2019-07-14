import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import RenderText from './../RenderText'
import UserProgressBar from './UserProgressBar'

export default class QuizFooter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalVisible: false,
    }
    this.renderButton = this.renderButton.bind(this)
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  renderButton() {
    let output=[]
    if (this.props.viewProgress || this.props.completed) {
      output.push(
        <TouchableHighlight
          onPress={() => this.openModal()}
          key='qf1'
          style={styles.FooterRight}
        >
          <RenderText style='p2' text='Neustart?'/>
        </TouchableHighlight>
      )
    } else {
      if (this.props.showAnswer) {
        output.push(
          <TouchableHighlight
            onPress={() => {this.props.nextQuestion()}}
            key='qf2'
            style={styles.FooterRight}
          >
            <Icon name="arrow-forward" size={16} color="#fff" />
          </TouchableHighlight>
        )
      } else {
        if (this.props.mode === 2) {
          output.push(
            <View style={styles.FooterRightDeactive} key='qf3'>
              <Icon name="arrow-forward" size={16} color="#fff" style={styles.IconDeactive} />
            </View>
          )
        } else {
          output.push(
            <TouchableHighlight
              onPress={() => {this.props.displayAnswers()}}
              key='qf4'
              style={styles.FooterRight}
            >
                <RenderText style='p2' text='Ich weiß nicht'/>
            </TouchableHighlight>
          )
        }
      }
    }
    return output
  }

  closeModalAndRestart() {
    this.props.restart()
    this.closeModal()
  }

  render() {
    return (
      <View style={styles.FooterContainer}>
        <Modal
          visible={this.state.modalVisible}
          animationType={'slide'}
          onRequestClose={() => {this.closeModal()}}
          >
          <View style={styles.modalContainer}>
            <View style={styles.modalContainerInner}>
              <View style={styles.modalContainerTitle}>
                <RenderText style='h2' text='Neustart?'/>
              </View>
              <View style={styles.modalButtons}>
                <TouchableHighlight
                  onPress={() => {this.closeModalAndRestart()}}
                  >
                  <Icon name="check" size={32} color="#fff" />
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {this.closeModal()}}
                  >
                  <Icon name="cancel" size={32} color="#fff" />
                </TouchableHighlight>
              </View>
            </View>
          </View>
        </Modal>
        <UserProgressBar
          progress={this.props.progress}
          numberOfQuestions={this.props.numberOfQuestions}
          mode={this.props.mode}
        />
        {this.renderButton()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  FooterContainer: {
    flexBasis: 64,
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
  FooterRightDeactive: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3e4651',
  },
  IconDeactive: {
    opacity: .5,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#23212b',
  },
  modalContainerInner: {
    marginLeft: '10%',
    marginRight: '10%',
    flexBasis: '20%',
    alignItems: 'stretch',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  modalContainerTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalButtons: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
