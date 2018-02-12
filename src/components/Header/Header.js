import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Font } from 'expo'
import { Actions } from 'react-native-router-flux'

import RenderText from './../RenderText'

export default class Header extends React.Component {

  render() {
    return (
      <View style={styles.HeaderContainer}>
        <View style={styles.HeaderLeft}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <RenderText style='p' text='L' />
          </TouchableOpacity>
        </View>
        <View style={styles.HeaderCenter}>
          <RenderText style='h1' text={this.props.title !== null ? this.props.title : 'untitled'} />
        </View>
        <View style={styles.HeaderRight}>
          <RenderText style='p' text='R' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  HeaderContainer: {
    flexBasis: '12%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: '#23212b',
  },
  HeaderCenter: {
    flex: 1,
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderLeft: {
    flexBasis: '15%',
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderRight: {
    flexBasis: '15%',
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
