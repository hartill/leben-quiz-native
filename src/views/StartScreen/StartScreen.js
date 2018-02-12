import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Picker } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Font } from 'expo'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

export default class StartScreen extends React.Component {
  state = {
    ready: false,
  }

  componentWillMount(){
    this._loadAssetsAsync()
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
                  <RenderText style='p2' text='Screen One' />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.screenTwo()}>
              <View style={[styles.Button, styles.Red, styles.TopSpacing]}>
                  <RenderText style='p2' text='Screen Two' />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => Actions.screenTwo()}>
              <View style={[styles.Button, styles.Green, styles.TopSpacing]}>
                  <RenderText style='p2' text='Screen Three' />
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
    flexBasis: 50,
    backgroundColor: '#37b1e3',
    alignItems: 'center',
    justifyContent: 'center',
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
