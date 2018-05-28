import React from 'react'
import { StyleSheet, Text, View, StatusBar, Dimensions, SafeAreaView } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import { Font } from 'expo'

import StartScreen from './src/views/StartScreen'
import PracticeMode from './src/views/PracticeMode'
import MockExam from './src/views/MockExam'
import QuestionCatalogue from './src/views/QuestionCatalogue'

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      isReady: false,
    }

    this.onLayout = this.onLayout.bind(this);
  }

  componentWillMount(){
    this._loadAssetsAsync()
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

  async _loadAssetsAsync(){
    try {
      await Font.loadAsync({
        'montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
      })
    }
    catch(e) {
      Log.error(e)
    }
    finally {
      this.setState({isReady: true})
    }
  }

  render() {
    if(this.state.isReady){
      return (
        <SafeAreaView style={styles.safeArea}>
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
              <Scene key="mockExam"
                component={MockExam}
                onLayout={this._onLayout}
              />
              <Scene key="questionCatalogue"
                component={QuestionCatalogue}
                onLayout={this._onLayout}
              />
            </Scene>
          </Router>
        </SafeAreaView>
      )
    } else {
      return null
    }
  }
}

const styles = StyleSheet.create({
  Montserrat: {
    fontFamily: 'montserrat',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#1D1B24'
  }
});
