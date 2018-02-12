import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

export default class ScreenTwo extends React.Component {
  render() {
    return (
      <View style={styles.AppContainer}>
        <Header title='Screen Two'/>
        <View style={styles.PageContainer}>
          <RenderText style='p' text='Page Content, screen 2'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  PageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  AppContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
});
