import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Platform} from 'react-native';
import {ImageController} from '../Controller/ImageController';

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: "empty"
        }

        var me = this;
        ImageController.getImageURL("http://localhost:3333/imageB", function(msg){
            me.setState({
                imageURL: msg
            });
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hello Friend! This is {Platform.OS} view!!!
                </Text>
                <Text>
                    Image Path: {this.state.imageURL}
                </Text>
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