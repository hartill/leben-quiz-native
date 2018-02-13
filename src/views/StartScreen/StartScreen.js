import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Picker, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Font } from 'expo'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

import quizQuestions from './../../data/quizQuestions'
import badenWurttembergQuestions from './../../data//badenWurttembergQuestions'
import bayernQuestions from './../../data//bayernQuestions'
import berlinQuestions from './../../data//berlinQuestions'

export default class StartScreen extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    ready: false,
    userLocation: 'none',
  }
  this.questions = quizQuestions
  this.numberOfQuestions = 300

  this.loadQuestionOptions = this.loadQuestionOptions.bind(this)
}

  componentWillMount(){
    this._loadAssetsAsync()
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

  async _loadAssetsAsync(){
    try {
      await Font.loadAsync({
        'montserrat': require('./../../../assets/fonts/Montserrat-Regular.ttf'),
      })
    }
    catch(e) {
      Log.error(e)
    }
    finally {
      this.setState({ready: true})
    }
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
    if(this.state.ready){
      return (
        <View style={styles.AppContainer}>
          <Header title='Welcome' icons={false} />
          <View style={styles.ContentContainer}>
            <Picker
              selectedValue = {this.state.userLocation}
              onValueChange={(value) => this.saveKey(value)}
              style={[styles.Picker]}
              itemStyle={styles.PickerItem}
              mode='dropdown'
            >
              <Picker.Item color='#fff' label = "Standort wählen:" value = "none"/>
              <Picker.Item color='#fff' label = "Baden-Württemberg" value = "badenWurttemberg" />
              <Picker.Item color='#fff' label = "Bayern" value = "bayern" />
              <Picker.Item color='#fff' label = "Berlin" value = "berlin" />
            </Picker>
            <TouchableHighlight
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
              onPress={() => Actions.practiceMode({
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
              onPress={() => Actions.practiceMode({
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
      );
    }
    return null
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
    justifyContent: 'flex-start',
    padding: 15,
  },
  Picker: {
    //backgroundColor: '#23212b',
    //borderColor: '#23212b',
    //borderBottomWidth: 1,
    //borderTopWidth: 1,
    //borderColor: '#fff',
  },
  PickerItem: {
    //may not work on android
    color: '#fff',
    fontFamily: 'montserrat',
  },
  Button: {
    position: 'relative',
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
