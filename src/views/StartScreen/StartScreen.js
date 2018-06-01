import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, ScrollView, AsyncStorage, Modal, SafeAreaView  } from 'react-native'
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
    if (this.state.userLocation !== value) {
      this.saveKey(value)
      this.removeProgress()
      this.removeIncorrect()
      this.removeExamProgress()
    }
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
            <SafeAreaView style={styles.safeArea}>
              <ScrollView contentContainerStyle={styles.ListContainer}>
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
                <TouchableOpacity
                  key={'brandenburg'}
                  onPress={() => {this.handleChangeOfLocation("brandenburg")}}
                  style={ this.state.userLocation === "brandenburg" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Brandenburg" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'bremen'}
                  onPress={() => {this.handleChangeOfLocation("bremen")}}
                  style={ this.state.userLocation === "bremen" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Bremen" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'hamburg'}
                  onPress={() => {this.handleChangeOfLocation("hamburg")}}
                  style={ this.state.userLocation === "hamburg" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Hamburg" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'hessen'}
                  onPress={() => {this.handleChangeOfLocation("hessen")}}
                  style={ this.state.userLocation === "hessen" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Hessen" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'mecklenburgVorpommern'}
                  onPress={() => {this.handleChangeOfLocation("mecklenburgVorpommern")}}
                  style={ this.state.userLocation === "mecklenburgVorpommern" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Mecklenburg-Vorpommern" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'niedersachsen'}
                  onPress={() => {this.handleChangeOfLocation("niedersachsen")}}
                  style={ this.state.userLocation === "niedersachsen" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Niedersachsen" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'nordrheinWestfalen'}
                  onPress={() => {this.handleChangeOfLocation("nordrheinWestfalen")}}
                  style={ this.state.userLocation === "nordrheinWestfalen" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Nordrhein-Westfalen" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'rheinlandPfalz'}
                  onPress={() => {this.handleChangeOfLocation("rheinlandPfalz")}}
                  style={ this.state.userLocation === "rheinlandPfalz" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Rheinland-Pfalz" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'saarland'}
                  onPress={() => {this.handleChangeOfLocation("saarland")}}
                  style={ this.state.userLocation === "saarland" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Saarland" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'sachsen'}
                  onPress={() => {this.handleChangeOfLocation("sachsen")}}
                  style={ this.state.userLocation === "sachsen" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Sachsen" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'sachsenAnhalt'}
                  onPress={() => {this.handleChangeOfLocation("sachsenAnhalt")}}
                  style={ this.state.userLocation === "sachsenAnhalt" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Sachsen-Anhalt" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'schleswigHolstein'}
                  onPress={() => {this.handleChangeOfLocation("schleswigHolstein")}}
                  style={ this.state.userLocation === "schleswigHolstein" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Schleswig-Holstein" />
                </TouchableOpacity>
                <TouchableOpacity
                  key={'thuringen'}
                  onPress={() => {this.handleChangeOfLocation("thuringen")}}
                  style={ this.state.userLocation === "thuringen" ? styles.selectedLocationOption : styles.locationOption }>
                    <RenderText style='p2' text="Thüringen" />
                </TouchableOpacity>
              </ScrollView>
            </SafeAreaView>
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
    flex: 1,
    backgroundColor: '#3e4651',
    zIndex: 5,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  safeArea: {
    backgroundColor: '#3e4651',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  ListContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  locationOption: {
    flexBasis: 50,
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
