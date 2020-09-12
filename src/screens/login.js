import React, {useState, useContext, Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput, Alert} from 'react-native'

import {AuthContextConsumer} from '../context/auth-context'

import { connect } from 'react-redux'
import { login } from '../store/actions/user'

import AuthContext from '../context/auth-context'

class Login extends Component { 

    state = {
        name: 'Luquinhas Lindo',
        email: '',
        password: '',
        logged: false,
        consumer: null
    }

    setLogin = consumer => {
        this.props.onLogin({...this.state})
        consumer.setLogged(true)
    }

    render() {
        return (        
            <AuthContextConsumer>
                {consumer => (
                    <View style={styles.container}>
                        <TextInput placeholder='Email' style={styles.input}
                            autoFocus={false} keyboardType='email-address'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}/>
                        <TextInput placeholder='Senha' style={styles.input}
                            secureTextEntry={true} value={this.state.password}
                            onChangeText={password => this.setState({ password })}/>
                        <TouchableOpacity onPress={() => this.setLogin(consumer)} style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('Register')}} 
                            style={styles.button}>
                            <Text style={styles.buttonText}>Criar nova conta</Text>
                        </TouchableOpacity>
                    </View>         
                )}                                                                                                       
            </AuthContextConsumer>               
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {

    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: { 
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333'
    }
})

const mapDispatchToProps = dispatch => ({
    onLogin: user => dispatch(login(user))
})

export default connect(null, mapDispatchToProps)(Login);