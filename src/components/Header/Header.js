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
        <TouchableOpacity onPress={() => Actions.pop()} style={styles.HeaderLeft}>
          <Icon name="arrow-back" size={20} color="#fff" />
        </TouchableOpacity>
      )
    }
  }

  renderSpacerLeft() {
    return (
      <View style={styles.HeaderLeft}>
      </View>
    )
  }

  renderButtonRight() {
    if (this.props.icons === true) {
      if (this.props.viewProgress === false) {
        return (
          <TouchableOpacity
            onPress={() => {this.props.handleViewProgress()}}
            style={styles.HeaderRight}>
            <Icon name="view-module" size={20} color="#fff" />
          </TouchableOpacity>
        )
      } else {
        return (
          <TouchableOpacity
            onPress={() => {this.props.handleViewProgress()}}
            style={styles.HeaderRight}>
            <Icon name="close" size={20} color="#fff" />
          </TouchableOpacity>
        )
      }
    }
  }

  render() {
    return (
      <View style={styles.HeaderContainer}>
        {this.props.renderHomeButton !== false ? this.renderButtonLeft() : this.renderSpacerLeft()}
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
    flexBasis: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#23212b',
  },
  HeaderCenter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderLeft: {
    flexBasis: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderRight: {
    flexBasis: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
