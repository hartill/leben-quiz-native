import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Picker, AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Font } from 'expo'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

export default class StartScreen extends React.Component {
  state = {
    ready: false,
    userLocation: '',
  }

  componentWillMount(){
    this._loadAssetsAsync()
    this.getKey()
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(nextState.userLocation)
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
              <Picker.Item color='#fff' label = "Choose:" value = "undefined"/>
              <Picker.Item color='#fff' label = "Steve" value = "steve" />
              <Picker.Item color='#fff' label = "Ellen" value = "ellen" />
              <Picker.Item color='#fff' label = "Maria" value = "maria" />
            </Picker>
            <TouchableHighlight onPress={() => Actions.screenTwo()}>
              <View style={[styles.Button, styles.Blue, styles.TopSpacing]}>
                <View style={[styles.ButtonText]}>
                  <RenderText style='p2' text='Screen One' />
                </View>
                <View style={[styles.ButtonIcon]}>
                  <Icon name="arrow-forward" size={16} color="#fff" />
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.screenTwo()}>
              <View style={[styles.Button, styles.Red, styles.TopSpacing]}>
              <View style={[styles.ButtonText]}>
                <RenderText style='p2' text='Screen Two' />
              </View>
              <View style={[styles.ButtonIcon]}>
                <Icon name="arrow-forward" size={16} color="#fff" />
              </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.screenTwo()}>
              <View style={[styles.Button, styles.Green, styles.TopSpacing]}>
              <View style={[styles.ButtonText]}>
                <RenderText style='p2' text='Screen Three' />
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
