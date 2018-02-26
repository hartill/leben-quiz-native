import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import RenderText from './../RenderText'

export default class Gameover extends React.Component {

  render() {
    return (
      <View style={styles.ContentContainer}>
        <View style={styles.FlagContainer}>
          <View style={styles.FlagBlack}>
          </View>
          <View style={styles.FlagYellow}>
          </View>
          <View style={styles.FlagRed}>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  FlagContainer: {
    flexBasis: '50%',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  FlagBlack: {
    flexBasis: '33.333%',
    backgroundColor: '#222',
  },
  FlagYellow: {
    flexBasis: '33.333%',
    backgroundColor: '#FFA400',
  },
  FlagRed: {
    flexBasis: '33.333%',
    backgroundColor: '#DD5152',
  },
});
