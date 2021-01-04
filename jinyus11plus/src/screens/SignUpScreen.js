import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import AuthForm from "../components/AuthForm"

import {AuthContext} from '../contexts/AuthContext'

const SignUpScreen = ({navigation}) => {
  const { state, signUp } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage=""
        submitButtonText="Sign Up"
        onSubmit={signUp}
      />
      <TouchableOpacity onPress={() => navigation.navigate('signin')}>
          <Text style={styles.link}>Already Have an account? Sign in instead!</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
})

export default SignUpScreen