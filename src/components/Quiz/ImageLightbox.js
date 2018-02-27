import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Image, Modal, Dimensions } from 'react-native'

import RenderText from './../../components/RenderText'

const deviceWidth = Dimensions.get('window').width;

export default class ImageLightBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lightboxOpen: false,
    }
  }

  openLightbox() {
    this.setState({
      lightboxOpen: true,
    })
  }

  closeLightbox() {
    this.setState({
      lightboxOpen: false,
    })
  }

  renderImage() {
    const images = {
      image21: require('./../../../assets/images/021.png'),
      image55: require('./../../../assets/images/055.png'),
      image70: require('./../../../assets/images/070.png'),
      image130: require('./../../../assets/images/130.png'),
      image176: require('./../../../assets/images/176.png'),
      image181: require('./../../../assets/images/181.png'),
      image187: require('./../../../assets/images/187.png'),
      image209: require('./../../../assets/images/209.png'),
      image216: require('./../../../assets/images/216.png'),
      image226: require('./../../../assets/images/226.png'),
      image235: require('./../../../assets/images/235.png'),
      image301: require('./../../../assets/images/badenWurttemberg/301.png'),
      image308: require('./../../../assets/images/badenWurttemberg/308.png'),
      image311: require('./../../../assets/images/bayern/311.png'),
      image318: require('./../../../assets/images/bayern/318.png'),
      image321: require('./../../../assets/images/berlin/321.png'),
      image328: require('./../../../assets/images/berlin/328.png'),
    }
    let questionId = parseInt(this.props.question.id)
    if (this.props.question.category === "Bayern") {
      questionId += 10
    }
    if (this.props.question.category === "Berlin") {
      questionId += 20
    }
    let imageRef = 'image' + questionId.toString()
    return (
      <View style={styles.LightboxcontainerInner}>
        <Image source={images[imageRef]} style={styles.LightboxImage} resizeMode={'contain'} />
      </View>
    )
  }

  render() {
    return (
      <View>
        <Modal
          visible={this.state.lightboxOpen}
          animationType={'slide'}
          onRequestClose={() => {this.closeLightbox()}}
          >
          <TouchableHighlight
            underlayColor='#23212b'
            onPress={() => {this.closeLightbox()}}
            style={styles.LightboxContainer}>
              {this.renderImage()}
          </TouchableHighlight>
        </Modal>
        <TouchableHighlight
          underlayColor='#e6e6e6'
          onPress={() => {this.openLightbox()}}
          style={styles.MessageContainer}>
          <RenderText style='p' text='Bild Ansehen' />
        </TouchableHighlight>
      </View>
    )
    /*if (this.state.lightboxOpen) {
      return (
        <TouchableHighlight
          underlayColor='#fff'
          onPress={() => {this.closeLightbox()}}
          style={styles.LightboxContainer}>
            {this.renderImage()}
        </TouchableHighlight>
      )
    } else {
      return (
        <TouchableHighlight
          underlayColor='#fff'
          onPress={() => {this.openLightbox()}}
          style={styles.MessageContainer}>
          <RenderText style='p' text='Bild Ansehen' />
        </TouchableHighlight>
      )
    }*/
  }
}

const styles = StyleSheet.create({
  MessageContainer: {
    marginTop: 15,
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
  },
  LightboxContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#23212b',
    zIndex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LightboxContainerInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LightboxImage: {
    flex: 1,
    width: deviceWidth,
  },
});
