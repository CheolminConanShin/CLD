import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Platform} from 'react-native';
import {getMoviesFromApiAsync} from '../Controller/ImageController';

export class App extends Component {
    render() {
        const imagePath = getMoviesFromApiAsync();
        console.log(imagePath);
        imagePath.then((message) => {
            console.log("-----response------");
            console.log(message.json());
        })
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hello Friend! This is {Platform.OS} view!!!
                </Text>
                <Text>
                    Image Path:
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