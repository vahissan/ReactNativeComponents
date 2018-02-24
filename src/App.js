import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import MaterialButton from '../../react-native-material-loading-button';

export default class App extends Component {

  onBtnPress() {
    console.log('btn pressed');
  }

  render() {
    return (
      <View style={styles.container}>
        <MaterialButton 
          disabled={false}
          flat={false}
          text="Button" 
          onPress={this.onBtnPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btn: {
    backgroundColor: 'red'
  }
});
