import React from 'react';
import {
  View,
  Video
} from 'react-vr';
import MovieProjector from './Layouts/MovieProjector.js';

class MovieTheater extends React.Component {
  render() {
    return (
      <MovieProjector/>
    )
  }
}
module.exports = MovieTheater;