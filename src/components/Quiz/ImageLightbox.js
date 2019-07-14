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

    let questionId = parseInt(this.props.question.id)

    if (this.props.question.category === "Bayern") {
      questionId += 10
    }
    if (this.props.question.category === "Berlin") {
      questionId += 20
    }
    if (this.props.question.category === "Brandenburg") {
      questionId += 30
    }
    if (this.props.question.category === "Bremen") {
      questionId += 40
    }
    if (this.props.question.category === "Hamburg") {
      questionId += 50
    }
    if (this.props.question.category === "Hessen") {
      questionId += 60
    }
    if (this.props.question.category === "Mecklenburg-Vorpommern") {
      questionId += 70
    }
    if (this.props.question.category === "Niedersachsen") {
      questionId += 80
    }
    if (this.props.question.category === "Nordrhein-Westfalen") {
      questionId += 90
    }
    if (this.props.question.category === "Rheinland-Pfalz") {
      questionId += 100
    }
    if (this.props.question.category === "Saarland") {
      questionId += 110
    }
    if (this.props.question.category === "Sachsen-Anhalt") {
      questionId += 120
    }
    if (this.props.question.category === "Sachsen") {
      questionId += 130
    }
    if (this.props.question.category === "Schleswig-Holstein") {
      questionId += 140
    }
    if (this.props.question.category === "Thüringen") {
      questionId += 150
    }
    let imageRef = 'image' + questionId.toString()
    return (
      <View style={styles.LightboxcontainerInner}>
        <Image source={this.props.images[imageRef]} style={styles.LightboxImage} resizeMode={'contain'} />
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
