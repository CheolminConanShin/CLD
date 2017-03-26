import React, {Component} from 'react';
import {Image} from 'react-native';

export default class ImageRenderer extends Component {
    styles = {
        image: {
            height: 200,
            width: 200
        }
    }
    render() {
        return(
            <Image
                source={{uri: this.props.imageUri}}
                style={this.styles.image}
            />
        )
    }
}