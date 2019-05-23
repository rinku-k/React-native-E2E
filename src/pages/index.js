import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class MainPage extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    buttonName: 'Change button Name',
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome Rinku!</Text>
        <Text style={styles.instructions}>{this.props.newText}</Text>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#457222'} ]}
          onPress={this.props.changeText}
        >
          <Text style={{ padding: 10, color: 'white', fontSize: 14 }}>Click Me!</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#846788'} ]}
          onPress={() => {
            this.setState({
              buttonName: 'Congrats!!',
            })
          }}
        >
          <Text style={{ padding: 10, color: 'white', fontSize: 14 }}>{this.state.buttonName}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#ff8765'}]}
          onPress={() => { this.props.navigation.navigate('firstScreen') }}
        >
          <Text style={{ padding: 10, color: 'white', fontSize: 14 }}>Go to next page</Text>
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
  button: {
    height: 40,
    margin: 10,
  },
});

const mapStateToProps = state => ({
  newText: state.textState.newText,
});

const mapDispatchToProps = dispatch => ({
  changeText: () => {
    dispatch({ type: 'TEMP_CHANGE' })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
