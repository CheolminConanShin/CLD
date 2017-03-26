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
            imageUri: "https://raw.githubusercontent.com/CheolminConanShin/CLD/master/test.jpeg"
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
                />
                <Button
                    onPress={this.setTestImage}
                    title="Test"
                />
            </View>
        );
    }

    setBeautyAndtheBeastImage() {
        var me = this;
        ImageController.getImage("beautyandthebeast", function(imageUri){
            console.log(imageUri);
            me.setState({
                imageUri: imageUri
            })
        })
    }

    setTestImage() {
        var me = this;
        ImageController.getImage("test", function(imageUri){
            console.log(imageUri);
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