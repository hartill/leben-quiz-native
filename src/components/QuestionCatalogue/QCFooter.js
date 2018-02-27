import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import RenderText from './../RenderText'

export default class QCFooter extends React.Component {

  render() {
    return (
      <View style={styles.FooterContainer}>
        <TouchableHighlight
          onPress={() => {this.props.nextQuestion()}}
          key='qf2'
          style={styles.FooterRight}
        >
          <Icon name="arrow-forward" size={16} color="#fff" />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  FooterContainer: {
    flexBasis: 56,
    backgroundColor: '#23212b',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  FooterRight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
