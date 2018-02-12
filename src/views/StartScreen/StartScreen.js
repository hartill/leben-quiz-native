import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

export default class StartScreen extends React.Component {
  render() {
    return (
      <View style={styles.AppContainer}>
        <Header title='Welcome' />
        <View style={styles.PageContainer}>
          <TouchableHighlight onPress={() => Actions.screenTwo()}>
            <View style={[styles.Button, styles.Blue]}>
                <RenderText style='p' text='Screen One' />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.screenTwo()}>
            <View style={[styles.Button, styles.Red]}>
                <RenderText style='p' text='Screen Two' />
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Actions.screenTwo()}>
            <View style={[styles.Button, styles.Green]}>
                <RenderText style='p' text='Screen Three' />
            </View>
          </TouchableHighlight>
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
  PageContainer: {
    flex: 1,
    backgroundColor: '#23212b',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 15,
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
});
