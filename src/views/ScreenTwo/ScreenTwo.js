import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from './../../components/Header'
import RenderText from './../../components/RenderText'

export default class ScreenTwo extends React.Component {
  render() {
    return (
      <View style={styles.AppContainer}>
        <Header title='Screen Two' icons={true}/>
        <View style={styles.ContentContainer}>
          <View style={styles.ContentHeaderContainer}>
            <View style={styles.ContentHeaderLeft}>
              <RenderText style='h2' text='1'/>
            </View>
            <View style={styles.ContentHeaderMain}>
              <RenderText style='h2' text='Header'/>
            </View>
          </View>
          <View style={styles.ContentBody}>
            <RenderText style='p' text='Body'/>
          </View>
        </View>
        <View style={styles.FooterContainer}>
          <RenderText style='p2' text='Page Content, screen 2'/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: '#3e4651',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  ContentContainer: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  FooterContainer: {
    flexBasis: '12%',
    backgroundColor: '#23212b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContentHeaderContainer: {
    flexBasis: 56,
    flexDirection: 'row',
    backgroundColor: '#37b1e3',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  ContentHeaderLeft: {
    flexBasis: 56,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContentHeaderMain: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 15,
  },
  ContentBody: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
