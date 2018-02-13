import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

import StartScreen from './src/views/StartScreen'
import PracticeMode from './src/views/PracticeMode'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="startScreen"
            component={StartScreen}
            direction="RightToleft"
            initial
          />
          <Scene key="practiceMode"
            component={PracticeMode}
          />
        </Scene>
      </Router>
    )
  }
}
