import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class MainPage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Rinku!</Text>
        <Text style={styles.instructions}>{this.props.newText}</Text>
        <TouchableOpacity
          style={{ backgroundColor: 'red', height: 40 }}
          onPress={this.props.changeText}
        >
          <Text style={{ padding: 10, color: 'white', fontSize: 14 }}>Click Me!</Text>
        </TouchableOpacity>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = state => ({
  newText: state.newText,
});

const mapDispatchToProps = dispatch => ({
  changeText: () => {
    dispatch({ type: 'TEMP_CHANGE' })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
