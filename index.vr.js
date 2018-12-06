import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Sound,
  View,
} from 'react-vr';

export default class OutdoorMovieTheater extends React.Component {
  render() {
    return (
      <View>
        <Pano 
          source={asset('fort-night.jpg')}
        >  
          <Sound
            volume={0.8}
            loop = {true}
            source={{mp3: asset('fort-night-atmosphere.mp3')}}
          />
        </Pano>
        <MovieTheater/>
      </View>
    );
  }
};

AppRegistry.registerComponent('OutdoorMovieTheater', () => OutdoorMovieTheater);
