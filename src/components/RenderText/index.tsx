import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface ISelectLocation {
  text: string
  style: string
}

const RenderText: React.FC<ISelectLocation> = ({ text, style }) => {

  let fontStyle: any = !style ? styles['p'] : styles[style]

  if(!text) {
    text = 'undefined'
  }

  return (
    <Text style={fontStyle}>{text}</Text>
  )
}

export default RenderText

const styles: any = StyleSheet.create({
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
    lineHeight: 22,
  },
  p2: {
    fontFamily: 'montserrat',
    color: '#fff',
    fontSize: 16,
    lineHeight: 22,
  },
  pSmall: {
    fontFamily: 'montserrat',
    color: '#fff',
    fontSize: 12,
  },
});
