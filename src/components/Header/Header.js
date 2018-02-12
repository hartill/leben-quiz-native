import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Font } from 'expo'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import RenderText from './../RenderText'

export default class Header extends React.Component {
    constructor(props) {
    super(props)
    this.renderButtonLeft = this.renderButtonLeft.bind(this)
    this.renderButtonRight = this.renderButtonRight.bind(this)
  }

  renderButtonLeft() {
    if (this.props.icons === true) {
      return (
        <View style={styles.HeaderLeft}>
          <TouchableOpacity onPress={() => Actions.pop()}>
            <Icon name="arrow-back" size={16} color="#fff" />
          </TouchableOpacity>
        </View>
      )
    }
  }

  renderButtonRight() {
    if (this.props.icons === true) {
      return (
        <View style={styles.HeaderRight}>
          <RenderText style='h2' text='R' />
        </View>
      )
    }
  }

  render() {
    return (
      <View style={styles.HeaderContainer}>
        {this.renderButtonLeft()}
        <View style={styles.HeaderCenter}>
          <RenderText style='h1' text={this.props.title !== null ? this.props.title : 'untitled'} />
        </View>
        {this.renderButtonRight()}
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
