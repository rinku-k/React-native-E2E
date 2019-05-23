import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

class SampleScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>This is next Screen</Text>
        <TouchableOpacity
          onPress={() => { this.props.navigation.navigate('home') }}
          hitSlop={{top: 40, bottom: 40, left: 40, right: 40}}
        >
          <Text style={{ color: 'blue' }}>Go Back</Text>
        </TouchableOpacity>
      </View>    
    );
  }
}

export default SampleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#0b0b0b',
    fontSize: 21,
  },
});
