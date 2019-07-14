import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, ScrollView, AsyncStorage, Picker, Modal, SafeAreaView  } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'
import LocationSelectionList from './../../components/LocationSelectionList'

import quizQuestions from './../../data/quizQuestions'
import badenWurttembergQuestions from './../../data/badenWurttembergQuestions'
import bayernQuestions from './../../data/bayernQuestions'
import berlinQuestions from './../../data/berlinQuestions'
import brandenburgQuestions from './../../data/brandenburgQuestions'
import bremenQuestions from './../../data/bremenQuestions'
import hamburgQuestions from './../../data/hamburgQuestions'
import hessenQuestions from './../../data/hessenQuestions'
import mecklenburgVorpommernQuestions from './../../data/mecklenburgVorpommernQuestions'
import niedersachsenQuestions from './../../data/niedersachsenQuestions'
import nordrheinWestfalenQuestions from './../../data/nordrheinWestfalenQuestions'
import rheinlandPfalzQuestions from './../../data/rheinlandPfalzQuestions'
import saarlandQuestions from './../../data/saarlandQuestions'
import sachsenQuestions from './../../data/sachsenQuestions'
import sachsenAnhaltQuestions from './../../data/sachsenAnhaltQuestions'
import schleswigHolsteinQuestions from './../../data/schleswigHolsteinQuestions'
import thuringenQuestions from './../../data/thuringenQuestions'

export default class StartScreen extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    userLocation: 'none',
    userSelectedLocation: 'none',
    modalOpen: false,
  }
  this.questions = quizQuestions
  this.numberOfQuestions = 300

  this.loadQuestionOptions = this.loadQuestionOptions.bind(this)
  this.handleLocationSelection = this.handleLocationSelection.bind(this)
  this.cancelLocationSelection = this.cancelLocationSelection.bind(this)
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
      this.setState({
        userLocation: value,
        userSelectedLocation: value
      })
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
    if (this.state.userLocation !== value) {
      this.saveKey(value)
      this.removeProgress()
      this.removeIncorrect()
      this.removeExamProgress()
    }
    this.closeModal()
  }

  handleLocationSelection(value) {
    this.setState({
      userSelectedLocation: value,
    })
  }

  cancelLocationSelection() {
    this.setState({
      userSelectedLocation: this.state.userLocation,
    })
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
        case 'brandenburg':
          this.questions = this.questions.concat(brandenburgQuestions)
          break
        case 'bremen':
          this.questions = this.questions.concat(bremenQuestions)
          break
        case 'hamburg':
          this.questions = this.questions.concat(hamburgQuestions)
          break
        case 'hessen':
          this.questions = this.questions.concat(hessenQuestions)
          break
        case 'mecklenburgVorpommern':
          this.questions = this.questions.concat(mecklenburgVorpommernQuestions)
          break
        case 'niedersachsen':
          this.questions = this.questions.concat(niedersachsenQuestions)
          break
        case 'nordrheinWestfalen':
          this.questions = this.questions.concat(nordrheinWestfalenQuestions)
          break
        case 'rheinlandPfalz':
          this.questions = this.questions.concat(rheinlandPfalzQuestions)
          break
        case 'saarland':
          this.questions = this.questions.concat(saarlandQuestions)
          break
        case 'sachsen':
          this.questions = this.questions.concat(sachsenQuestions)
          break
        case 'sachsenAnhalt':
          this.questions = this.questions.concat(sachsenAnhaltQuestions)
          break
        case 'schleswigHolstein':
          this.questions = this.questions.concat(schleswigHolsteinQuestions)
          break
        case 'thuringen':
          this.questions = this.questions.concat(thuringenQuestions)
          break
        default:
          this.questions = this.questions.concat(sachsenQuestions)
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
    } else if (this.state.userLocation === 'brandenburg') {
      userLocationOutput = 'Brandenburg'
    } else if (this.state.userLocation === 'bremen') {
      userLocationOutput = 'Bremen'
    } else if (this.state.userLocation === 'hamburg') {
      userLocationOutput = 'Hamburg'
    } else if (this.state.userLocation === 'hessen') {
      userLocationOutput = 'Hessen'
    } else if (this.state.userLocation === 'mecklenburgVorpommern') {
      userLocationOutput = 'Mecklenburg-Vorpommern'
    } else if (this.state.userLocation === 'niedersachsen') {
      userLocationOutput = 'Niedersachsen'
    } else if (this.state.userLocation === 'nordrheinWestfalen') {
      userLocationOutput = 'Nordrhein-Westfalen'
    } else if (this.state.userLocation === 'rheinlandPfalz') {
      userLocationOutput = 'Rheinland-Pfalz'
    } else if (this.state.userLocation === 'saarland') {
      userLocationOutput = 'Saarland'
    } else if (this.state.userLocation === 'sachsen') {
      userLocationOutput = 'Sachsen'
    } else if (this.state.userLocation === 'sachsenAnhalt') {
      userLocationOutput = 'Sachsen-Anhalt'
    } else if (this.state.userLocation === 'schleswigHolstein') {
      userLocationOutput = 'Schleswig-Holstein'
    } else if (this.state.userLocation === 'thuringen') {
      userLocationOutput = 'Thüringen'
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
            style={styles.ModalContainer}
            >
            <SafeAreaView style={styles.safeAreaModal}>
              <View style={styles.SelectionListView}>
                <View style={styles.PickerContainer}>
                  <Picker
                    selectedValue = {this.state.userSelectedLocation}
                    onValueChange={(value) => this.handleLocationSelection(value)}
                    //style={styles.Picker}
                    //itemStyle={styles.PickerItem}
                    mode='dropdown'
                  >
                    <Picker.Item label = "keiner" value = "none"/>
                    <Picker.Item label = "Baden-Württemberg" value = "badenWurttemberg" />
                    <Picker.Item label = "Bayern" value = "bayern" />
                    <Picker.Item label = "Berlin" value = "berlin" />
                    <Picker.Item label = "Brandenburg" value = "brandenburg" />
                    <Picker.Item label = "Bremen" value = "bremen" />
                    <Picker.Item label = "Hamburg" value = "hamburg" />
                    <Picker.Item label = "Hessen" value = "hessen" />
                    <Picker.Item label = "Mecklenburg-Vorpommern" value = "mecklenburgVorpommern" />
                    <Picker.Item label = "Niedersachsen" value = "niedersachsen" />
                    <Picker.Item label = "Nordrhein-Westfalen" value = "nordrheinWestfalen" />
                    <Picker.Item label = "Rheinland-Pfalz" value = "rheinlandPfalz" />
                    <Picker.Item label = "Saarland" value = "saarland" />
                    <Picker.Item label = "Sachsen" value = "sachsen" />
                    <Picker.Item label = "Sachsen-Anhalt" value = "sachsenAnhalt" />
                    <Picker.Item label = "Schleswig-Holstein" value = "schleswigHolstein" />
                    <Picker.Item label = "Thüringen" value = "thuringen" />
                  </Picker>
                </View>
                <View style={styles.ConfirmationTextButtonContainer}>
                  <View style={styles.ConfirmationButtonContainer}>
                    <TouchableHighlight
                      underlayColor='#23212b'
                      onPress={() => this.handleChangeOfLocation(this.state.userSelectedLocation)}
                      style={styles.ConfirmationButtonOuter}>
                      <View style={styles.ConfirmationButton}>
                        <View>
                          <RenderText style='p2' text={this.state.userSelectedLocation !== this.state.userLocation ? 'Bestätigen*' : 'Bestätigen'} />
                        </View>
                        <View style={[styles.ConfirmationButtonIcon]}>
                          <Icon name="done" size={16} color="#fff" />
                        </View>
                      </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                      underlayColor='#23212b'
                      onPress={() => this.cancelLocationSelection()}
                      style={styles.ConfirmationButtonOuter}>
                      <View style={styles.ConfirmationButton}>
                        <View>
                          <RenderText style='p2' text='Abbrechen' />
                        </View>
                        <View style={[styles.ConfirmationButtonIcon]}>
                          <Icon name="clear" size={16} color="#fff" />
                        </View>
                      </View>
                    </TouchableHighlight>
                  </View>
                  <View style={[styles.ConfirmationText]}>
                  {
                    this.state.userSelectedLocation !== this.state.userLocation ?
                    (
                        <RenderText style='pSmall' text='*Ihr Fortschritt wird zurückgesetzt' />
                    ) : null
                  }
                  </View>
                </View>
              </View>
            </SafeAreaView>
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
  ModalContainer: {
    flex: 1,
    zIndex: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  safeAreaModal: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#3e4651',
  },
  SelectionListView: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-around',
    padding: 15,
  },
  PickerContainer: {
    //backgroundColor: '#3e4651',
    backgroundColor: '#fff',
    //borderColor: '#fff',
    //borderWidth: 1,
  },
  PickerItem: {
    //color: '#fff',
  },
  ConfirmationButtonContainer: {
    flexBasis: 50,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  ConfirmationButtonOuter: {
    flexBasis: '48%',
  },
  ConfirmationButton: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
  },
  ConfirmationButtonIcon: {
    paddingLeft: 8
  },
  ConfirmationText: {
    flexBasis: 15,
    marginTop: 10,
  },
  ConfirmationTextButtonContainer: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
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
