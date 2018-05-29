import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, AsyncStorage, Modal } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'
import LocationSelectionList from './../../components/LocationSelectionList'

import quizQuestions from './../../data/quizQuestions'
import badenWurttembergQuestions from './../../data//badenWurttembergQuestions'
import bayernQuestions from './../../data//bayernQuestions'
import berlinQuestions from './../../data//berlinQuestions'

export default class StartScreen extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    userLocation: 'none',
    modalOpen: false,
  }
  this.questions = quizQuestions
  this.numberOfQuestions = 300

  this.loadQuestionOptions = this.loadQuestionOptions.bind(this)
}

  openModal() {
    this.setState({
      modalOpen: true,
    })
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    })
  }

  componentWillMount(){
    this.getKey()
    this.loadQuestionOptions()
  }

  componentDidUpdate(nextProps, nextState) {
    this.loadQuestionOptions()
  }

  async getKey() {
    try {
      const value = await AsyncStorage.getItem('@LebenStore:userLocation')
      this.setState({userLocation: value})
    } catch (error) {
      console.log("Error retrieving data" + error)
    }
  }

  async saveKey(value) {
    try {
      await AsyncStorage.setItem('@LebenStore:userLocation', value);
      this.setState({userLocation: value})
    } catch (error) {
      console.log("Error saving data" + error);
    }
  }

  async removeProgress() {
    try {
      await AsyncStorage.removeItem('@LebenStore:progress');
      return true;
    }
    catch(exception) {
      return false;
    }
  }

  async removeIncorrect() {
    try {
      await AsyncStorage.removeItem('@LebenStore:incorrect');
      return true;
    }
    catch(exception) {
      return false;
    }
  }

  async removeExamProgress() {
    try {
      await AsyncStorage.removeItem('@LebenStore:examProgress');
      return true;
    }
    catch(exception) {
      return false;
    }
  }

  handleChangeOfLocation(value) {
    this.saveKey(value)
    this.removeProgress()
    this.removeIncorrect()
    this.removeExamProgress()
    this.closeModal()
  }

  loadQuestionOptions() {
    this.questions = quizQuestions
    this.numberOfQuestions = 300
    if (this.state.userLocation !== 'none') {
      this.numberOfQuestions = 310
      let location = this.state.userLocation
      switch (location) {
        case 'badenWurttemberg':
          this.questions = this.questions.concat(badenWurttembergQuestions)
          break
        case 'bayern':
          this.questions = this.questions.concat(bayernQuestions)
          break
        case 'berlin':
          this.questions = this.questions.concat(berlinQuestions)
          break
        default:
          this.questions = this.questions.concat(badenWurttembergQuestions)
      }
    }
  }

  render() {
    let userLocationOutput = 'Standort wählen'
    if (this.state.userLocation === 'badenWurttemberg') {
      userLocationOutput = 'Baden-Württemberg'
    } else if (this.state.userLocation === 'bayern') {
      userLocationOutput = 'Bayern'
    } else if (this.state.userLocation === 'berlin') {
      userLocationOutput = 'Berlin'
    }

    return (
      <View style={styles.AppContainer}>
        <Header title='Leben In Deutschland Test' icons={false} />
        <View style={styles.ContentContainer}>
          <TouchableHighlight
            underlayColor='#23212b'
            onPress={() => {this.openModal()}}
            style={styles.ChooseLocation}>
            <View style={[styles.Button, styles.Grey, styles.TopSpacing]}>
              <View style={[styles.ButtonText]}>
                <RenderText style='p2' text={userLocationOutput} />
              </View>
              <View style={[styles.ButtonIcon]}>
                <Icon name="expand-more" size={16} color="#fff" />
              </View>
            </View>
          </TouchableHighlight>
          <Modal
            visible={this.state.modalOpen}
            animationType={'slide'}
            onRequestClose={() => {this.closeModal()}}
            >
            <View style={styles.ModalContainer}>
              <TouchableOpacity
                key={'none'}
                onPress={() => {this.handleChangeOfLocation("none")}}
                style={ this.state.userLocation === "none" ? styles.selectedLocationOption : styles.locationOption }>
                  <RenderText style='p2' text="keiner" />
              </TouchableOpacity>
              <TouchableOpacity
                key={'badenWurttemberg'}
                onPress={() => {this.handleChangeOfLocation("badenWurttemberg")}}
                style={ this.state.userLocation === "badenWurttemberg" ? styles.selectedLocationOption : styles.locationOption }>
                  <RenderText style='p2' text="Baden-Württemberg" />
              </TouchableOpacity>
              <TouchableOpacity
                key={'bayern'}
                onPress={() => {this.handleChangeOfLocation("bayern")}}
                style={ this.state.userLocation === "bayern" ? styles.selectedLocationOption : styles.locationOption }>
                  <RenderText style='p2' text="Bayern" />
              </TouchableOpacity>
              <TouchableOpacity
                key={'berlin'}
                onPress={() => {this.handleChangeOfLocation("berlin")}}
                style={ this.state.userLocation === "berlin" ? styles.selectedLocationOption : styles.locationOption }>
                  <RenderText style='p2' text="Berlin" />
              </TouchableOpacity>
            </View>
            {/*<TouchableHighlight
              underlayColor='#23212b'
              onPress={() => {this.closeModal()}}
              style={styles.ModalContainer}>
                <Picker
                  selectedValue = {this.state.userLocation}
                  onValueChange={(value) => this.handleChangeOfLocation(value)}
                  style={styles.Picker}
                  itemStyle={styles.PickerItem}
                  mode='dropdown'
                >
                  <Picker.Item color='#fff' label = "keiner" value = "none"/>
                  <Picker.Item color='#fff' label = "Baden-Württemberg" value = "badenWurttemberg" />
                  <Picker.Item color='#fff' label = "Bayern" value = "bayern" />
                  <Picker.Item color='#fff' label = "Berlin" value = "berlin" />
                </Picker>
            </TouchableHighlight>*/}
          </Modal>
          <View style={styles.ButtonContainer}>
            <TouchableHighlight
              underlayColor='#23212b'
              onPress={() => Actions.practiceMode({
                  questions: this.questions,
                  numberOfQuestions: this.numberOfQuestions,
                })}>
              <View style={[styles.Button, styles.Blue, styles.TopSpacing]}>
                <View style={[styles.ButtonText]}>
                  <RenderText style='p2' text='Trainieren' />
                </View>
                <View style={[styles.ButtonIcon]}>
                  <Icon name="arrow-forward" size={16} color="#fff" />
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor='#23212b'
              onPress={() => Actions.mockExam({
                  questions: this.questions,
                  numberOfQuestions: this.numberOfQuestions,
                })}>
              <View style={[styles.Button, styles.Red, styles.TopSpacing]}>
              <View style={[styles.ButtonText]}>
                <RenderText style='p2' text='Probeprüfung' />
              </View>
              <View style={[styles.ButtonIcon]}>
                <Icon name="arrow-forward" size={16} color="#fff" />
              </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor='#23212b'
              onPress={() => Actions.questionCatalogue({
                  questions: this.questions,
                  numberOfQuestions: this.numberOfQuestions,
                })}>
              <View style={[styles.Button, styles.Green, styles.TopSpacing]}>
              <View style={[styles.ButtonText]}>
                <RenderText style='p2' text='Fragenkatalog' />
              </View>
              <View style={[styles.ButtonIcon]}>
                <Icon name="arrow-forward" size={16} color="#fff" />
              </View>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  ContentContainer: {
    flex: 1,
    backgroundColor: '#23212b',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    padding: 15,
  },
  ChooseLocation: {
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  ModalContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#3e4651',
    zIndex: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  locationOption: {
    flexBasis: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(256,256,256,0.2)',
    borderStyle: 'solid',
    borderTopWidth: 1,
  },
  selectedLocationOption: {
    flexBasis: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(256,256,256,0.3)',
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: 'rgba(256,256,256,0.1)'
  },
  ButtonContainer: {
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  Button: {
    //position: 'relative',
    flexBasis: 50,
    backgroundColor: '#37b1e3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonIcon: {
    position: 'absolute',
    right: 10,
  },
  Grey: {
    backgroundColor: '#3e4651',
  },
  Blue: {
    backgroundColor: '#37b1e3',
  },
  Red: {
    backgroundColor: '#dd5152',
  },
  Green: {
    backgroundColor: '#2cc990',
  },
  TopSpacing: {
    marginTop: 25,
  },
});
