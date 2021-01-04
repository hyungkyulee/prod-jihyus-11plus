import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import AuthForm from "../components/AuthForm"

import {AuthContext} from '../contexts/AuthContext'

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { signIn } = React.useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In to your Acoount"
        errorMessage=""
        onSubmit={() => signIn({ username, password })}
        submitButtonText="Sign In"
      />
      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
          <Text style={styles.link}>Dont have an account? Sign up instead</Text>
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
  link: {
    color: "blue",
  }
})

export default SignInScreen
