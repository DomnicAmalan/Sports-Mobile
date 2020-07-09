import React, { useState } from 'react'
import { View, StyleSheet, Dimensions, Text, TextInput, TouchableOpacity, AsyncStorage, Button } from 'react-native';
import { Icon } from 'react-native-elements'


const SignIn = (props) => {

    const [emailError, setEmailError] = useState(false)
    const [email, setEmail] = useState('')
    const [hidePassword, setShowPassword] = useState(true);

    const EmailError = "Email is not valid"

    const validateEmail = async() => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const check = await re.test(String(email).toLowerCase())
        if(check){
            setEmailError(false)
        }
        else{
            setEmailError(true)
        }
    }


    return (
        <View style={styles.signinView}>
            <View style={styles.textBox}>
                <TextInput style={styles.signInTextInput} name="Email" placeholder="Email" defaultValue={email} placeholderTextColor="#1A2040" forwardRef="Email"  onEndEditing={() => validateEmail()} onChangeText={(Email) => setEmail(Email)}/>
                {emailError ? <Text>{EmailError}</Text>: <Text></Text>}
            </View>
            <View style={styles.textBox}>
                <TextInput style={styles.signInTextInput} secureTextEntry={hidePassword} name="Password" placeholder="Password" placeholderTextColor="#1A2040" />
                <View style={styles.setShowPassword} onPress={()=>setShowPassword(!hidePassword)}>
                    <Icon name="eye" size={25} color="#900"/>
                </View> 
            </View>
            <View style={styles.buttonView}>
                <Button title="Sign In" style={styles.buttonStyle} onPress={()=>{AsyncStorage.setItem('userToken', 'yes').then(() => props.setLogin(true))}}><Text style={styles.buttontext}>Sign In</Text></Button>
            </View>
            <TouchableOpacity>
                <Text onPress={()=>props.setRegister(true)}>Create Account</Text>
            </TouchableOpacity>
        </View>
    )
}
console.log(Dimensions.get('window').height)
const styles = StyleSheet.create({
    signinView: {        
        backgroundColor: 'white',
        width:Dimensions.get('window').width,
        position:"absolute",
        borderTopWidth: 10,
        borderColor: "#6850de",
    },
    signInTextInput: {
        flex:3,
        height: 45, 
        borderColor: 'black', 
        borderWidth: 7, 
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        width: 300,
        paddingLeft: 10,
    },
    textBox: {
        paddingTop: 15,
        paddingLeft: 20,
        alignContent: "center"
    },
    buttonView: {
        paddingTop: 10,
        alignItems: "center",
    },
    buttonStyle: {
        backgroundColor: "#6850de",
        borderRadius: 10,
        height: 35,
        width: 100,
        textAlign: "center"
    },
    linkText: {
        color: "#473ee6",
        paddingTop: 10,
    },
    setShowPassword: {
        position:"absolute",
        resizeMode: "contain",
        height: "100%",
        width: "100%",
        left: 120,
        top: 18
    },
    buttontext: {
        alignSelf: "center"
    }
})

export default SignIn;