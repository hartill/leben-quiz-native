import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class RenderText extends React.Component {
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
    let fontStyle = this.props.style === null ? styles[p] : styles[this.props.style]
    let text = this.props.text === null ? 'undefined' : this.props.text
    if(this.state.ready){
      return (
        <Text style={fontStyle}>{text}</Text>
      )
    }
    return null
  }
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'montserrat',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  p: {
    fontFamily: 'montserrat',
    color: '#fff',
    fontWeight: 'normal',
    fontSize: 14,
  },
});
