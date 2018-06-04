import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo';

export default class RenderText extends React.Component {

  render() {
    let fontStyle = this.props.style === null ? styles[p] : styles[this.props.style]
    let text = this.props.text === null ? 'undefined' : this.props.text
    return (
      <Text style={fontStyle}>{text}</Text>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'montserrat',
    color: '#fff',
    fontSize: 18,
  },
  h2: {
    fontFamily: 'montserrat',
    color: '#fff',
    fontSize: 18,
  },
  h3: {
    fontFamily: 'montserrat',
    color: '#555',
    fontSize: 18,
  },
  p: {
    fontFamily: 'montserrat',
    color: '#555',
    fontSize: 16,
  },
  p2: {
    fontFamily: 'montserrat',
    color: '#fff',
    fontSize: 16,
  },
  pSmall: {
    fontFamily: 'montserrat',
    color: '#fff',
    fontSize: 12,
  },
  p2Small: {
    fontFamily: 'montserrat',
    color: '#555',
    fontSize: 12,
  },
});
