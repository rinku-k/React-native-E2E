import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';

class ServerDataScreen extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const { data, error } = this.props.feeds;
    if (error) {
      <View style={styles.container}>
        <Text style={styles.heading}>Could not load</Text>
        <TouchableOpacity
          onPress={this.props.getData}
          hitSlop={{top: 40, bottom: 40, left: 40, right: 40}}
        >
          <Text style={{ color: 'blue' }}>Refresh</Text>
        </TouchableOpacity>
      </View>   
    }
    if (data) {
      return (
        <ScrollView style={{ flex: 1, padding: 10, backgroundColor: '#eee' }}>
          <Text style={styles.heading}>Feeds</Text>
          {
            data.map(({title, authorName}) => {
              return (
                <View style={{ padding:10, marginVertical: 10, backgroundColor: '#fff', borderWidth: 1, borderColor: '#333', borderRadius: 2 }}>
                  <Text>{decodeURIComponent(escape(title))}</Text>
                </View>
              )
            })
          }
        </ScrollView> 
      );
    }
    return <Text>Loading ...</Text>
  }
}

const mapDispatchToProps = dispatch => ({
  getData: () => { dispatch({ type: 'USER_FETCH_REQUESTED' }) },
});

const mapStateToProps = state => ({
  feeds: state.feeds,
});

export default connect(mapStateToProps, mapDispatchToProps)(ServerDataScreen);

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
