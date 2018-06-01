import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import RenderText from './../RenderText'

export default class LocationSelectionList extends React.Component {

  render() {
    let userLocationOutput = 'Standort wählen'
    if (this.props.userLocation === 'badenWurttemberg') {
      userLocationOutput = 'Baden-Württemberg'
    } else if (this.props.userLocation === 'bayern') {
      userLocationOutput = 'Bayern'
    } else if (this.props.userLocation === 'berlin') {
      userLocationOutput = 'Berlin'
    }

    let locationOptions=[
      "keiner",
      "Baden-Württemberg",
      "Bayern",
      "Berlin",
    ]
    return (
      <View style={styles.ModalContainer}>
        <TouchableOpacity
          onPress={() => {this.props.closeModal()}}
          style={styles.ModalCloseIcon}>
          <Icon name="close" size={16} color="#fff" />
        </TouchableOpacity>
        <TouchableHighlight
          underlayColor='#23212b'
          onPress={() => {this.props.handleChangeOfLocation("none")}}
          style={styles.locationOption}
          >
            <RenderText style='p2' text="keiner" />
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ModalContainer: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#3e4651',
    zIndex: 5,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  ModalCloseIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
