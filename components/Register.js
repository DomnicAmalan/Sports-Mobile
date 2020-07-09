import React from 'react'
import { View, Text } from 'react-native'

const Register = (props) => {
    return(
        <View>
            <Text>
                Register
            </Text>
            <Text onPress={()=>(props.setRegister(false))}>Already having Account? Sign In</Text>
        </View>
    )
}

export default Register;