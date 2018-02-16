import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'

import RenderText from './../../components/RenderText'

export default class ImageLightBox extends React.Component {
  constructor(props) {
    super(props)
  }

  renderImage(image) {
    return (
      // <Image source={{uri: './../../../assets/images/' + image}}/>
      <Image source={require('./../../../assets/images/021.png')} />
    )
  }

  render() {
    return (
      <TouchableHighlight
        //onPress={() => {this.closeLightbox()}}
        style={styles.ContentContainer}>
        <RenderText style='p' text='Image Ansehen' />
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  ContentContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});
