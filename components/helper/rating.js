import StarRating from 'react-native-star-rating';
import React, { Component, PropTypes } from 'react';
import {
  Navigator,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';

class CustomStarExample extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,
    starCount: PropTypes.number.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {
      starCount: this.props.starCount
    };
  }

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  render() {
    return (
      <StarRating
        disabled={this.props.disabled}
        halfStar={'md-contrast'}
        emptyStar={'md-radio-button-off'}
        fullStar={'md-radio-button-on'}
        iconSet={'Ionicons'}
        maxStars={5}
        rating={this.state.starCount}
        selectedStar={(rating) => this.onStarRatingPress(rating)}
        starColor={'#3498DB'}
      />
    );
  }
}

export default CustomStarExample
