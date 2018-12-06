import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class OutdoorMovieTheater extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('fort-night.jpg')}/>      
      </View>
    );
  }
};

AppRegistry.registerComponent('OutdoorMovieTheater', () => OutdoorMovieTheater);
