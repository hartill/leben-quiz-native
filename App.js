import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import StartScreen from './src/views/StartScreen'
import PracticeMode from './src/views/PracticeMode'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    }

    this.onLayout = this.onLayout.bind(this);
  }

  componentDidMount() {
    StatusBar.setHidden(true)
  }

  onLayout(e) {
    this.setState({
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    });
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true} onLayout={this._onLayout}>
          <Scene key="startScreen"
            onLayout={this._onLayout}
            component={StartScreen}
            direction="RightToleft"
            initial
          />
          <Scene key="practiceMode"
            component={PracticeMode}
            onLayout={this._onLayout}
          />
        </Scene>
      </Router>
    )
  }
}
