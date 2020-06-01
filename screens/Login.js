import React, { Component } from 'react';
import { Animated, Dimensions, Keyboard, StyleSheet, TextInput, UIManager, Image, View, Text, TouchableOpacity, Button } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const { State: TextInputState } = TextInput;

export default class App extends Component {
    state = {
        shift: new Animated.Value(0),
        name: null,
        email: null,
        username: null,
        password: null,
    };

    componentDidMount() {
        this.keyboardDidShowSub = Keyboard.addListener('keyboardDidShow', this.handleKeyboardDidShow);
        this.keyboardDidHideSub = Keyboard.addListener('keyboardDidHide', this.handleKeyboardDidHide);
    }

    componentWillUnmount() {
        this.keyboardDidShowSub.remove();
        this.keyboardDidHideSub.remove();
    }

    render() {
        const { shift } = this.state;
        return (
            <KeyboardAwareScrollView
                style={{ backgroundColor: '#4c69a5' }}
                resetScrollToCoords={{ x: 0, y: 0 }}
                contentContainerStyle={styles.container}
                scrollEnabled={false}
            >
                <Animated.View style={[styles.container, { transform: [{ translateY: shift }] }]}>
                    <View style={[styles.imgContainer]}>
                        <Image source={require('../assets/images/acm_logo_final.png')} />
                        <Image source={require('../assets/images/acm_logo_text_final.png')} />
                    </View>
                    <Text style={styles.presentsContainer}>presents</Text>
                    <Text style={styles.header}>Stock Market Simulation</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            onChangeText={(name) => { this.setState({ name: name }) }}
                            placeholder="Name"
                            placeholderTextColor='white'
                            style={styles.textInput}
                        />
                        <TextInput
                            onChangeText={(email) => { this.setState({ email: email }) }}
                            placeholder="Email-id"
                            placeholderTextColor='white'
                            style={styles.textInput}
                        />
                        <TextInput
                            onChangeText={(username) => { this.setState({ username: username }) }}
                            placeholder="Username"
                            placeholderTextColor='white'
                            style={styles.textInput}
                        />
                        <TextInput
                            onChangeText={(password) => { this.setState({ password: password }) }}
                            placeholder="Password"
                            placeholderTextColor='white'
                            style={styles.textInput}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => { }}
                    >
                        <Text style={{ color: '#059FC9', fontSize: 15 }}>Sign-Up</Text>
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.leftText}>Already have an account?  </Text><Text onPress={() => { }} style={styles.rightText}>Login</Text>
                    </View>
                </Animated.View>
            </KeyboardAwareScrollView >
        );
    }

    handleKeyboardDidShow = (event) => {
        const { height: windowHeight } = Dimensions.get('window');
        const keyboardHeight = event.endCoordinates.height;
        const currentlyFocusedField = TextInputState.currentlyFocusedField();
        UIManager.measure(currentlyFocusedField, (originX, originY, width, height, pageX, pageY) => {
            const fieldHeight = height;
            const fieldTop = pageY;
            const gap = (windowHeight - keyboardHeight) - (fieldTop + fieldHeight);
            if (gap >= 0) {
                return;
            }
            Animated.timing(
                this.state.shift,
                {
                    toValue: gap - 80,
                    duration: 100,
                    useNativeDriver: true,
                }
            ).start();
        });
    }

    handleKeyboardDidHide = () => {
        Animated.timing(
            this.state.shift,
            {
                toValue: 0,
                duration: 100,
                useNativeDriver: true,
            }
        ).start();
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#059FC9',
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'flex-start',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%'
    },
    imgContainer: {
        marginTop: 40,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 130,
        // backgroundColor: 'red',
        overflow: 'hidden',
    },
    presentsContainer: {
        color: 'white',
        fontSize: 15,
    },
    header: {
        fontSize: 30,
        color: 'white',
        marginVertical: 30,
    },
    inputContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    textInput: {
        backgroundColor: 'white',
        height: 50,
        width: '75%',
        marginVertical: 20,
        backgroundColor: '#8fbec9',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5,
        color: 'white',
        paddingHorizontal: 10,
        fontSize: 17,
        color: 'white',
    },
    button: {
        alignItems: "center",
        color: '#059FC9',
        backgroundColor: "white",
        paddingHorizontal: 40,
        paddingVertical: 10,
        borderRadius: 15,
        marginBottom: 15,
    },
    leftText: {
        color: 'white',
    },
    rightText: {
        color: 'white',
        textDecorationLine: 'underline',
    }
});