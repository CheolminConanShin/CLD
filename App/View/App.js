import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Platform, Button} from 'react-native';
import ImageRenderer from './ImageRenderer';
import {ImageController} from '../Controller/ImageController';

export class App extends Component {
    constructor(props) {
        super(props);

        this.setBeautyAndtheBeastImage = this.setBeautyAndtheBeastImage.bind(this);
        this.setTestImage = this.setTestImage.bind(this);
        this.state = {
            imageUri: "https://img.clipartfest.com/227e49f534f43347b030d1ba6a6767f5_hand-select-icon-select_512-512.png"
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hello Friend! This is {Platform.OS} view!!!
                </Text>
                <ImageRenderer imageUri={this.state.imageUri}/>
                <Button
                    onPress={this.setBeautyAndtheBeastImage}
                    title="BeautyAndTheBeast"
                    style={styles.button}
                />
                <Button
                    onPress={this.setTestImage}
                    title="Test"
                    style={styles.button}
                />
            </View>
        );
    }

    setBeautyAndtheBeastImage() {
        var me = this;
        ImageController.getImage("beautyandthebeast", function(imageUri){
            me.setState({
                imageUri: imageUri
            })
        })
    }

    setTestImage() {
        var me = this;
        ImageController.getImage("test", function(imageUri){
            me.setState({
                imageUri: imageUri
            })
        })
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