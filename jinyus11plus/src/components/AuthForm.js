import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { 
  Content, 
  Input, 
  Item,
  Form,
  Button,
  Label,
  Icon
} from 'native-base'

const AuthForm = ({ navigation, headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Content style={styles.content}>
      <Form style={styles.form}>
        <Item stackedLabel style={{textAlign: 'center'}}>
          {/* <Label style={{textAlign: 'center'}}>Your Email</Label> */}
          <Input 
            placeholder="Your Email"
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            style={{textAlign: 'center'}}
          />
        </Item>
        <Item stackedLabel style={{borderBottomWidth: 0}}>
          {/* <Label style={{textAlign: 'center'}}>Your Password</Label> */}
          <Input 
            secureTextEntry
            placeholder="Your Passcode"
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            style={{textAlign: 'center'}}
          />
        </Item>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
      </Form>
      {/* <TouchableOpacity onPress={() => navigation.navigate('forgot')}> */}
      <TouchableOpacity onPress={() => console.log('forgot passcode')}>
        <Text style={[styles.link,{textAlign:'right'}]}>FORGOT</Text>
      </TouchableOpacity>

      <Button 
        iconRight
        style={styles.button} 
        onPress={() => onSubmit({ email, password })}>
        <Text style={styles.textButton}>START</Text>
        <Icon type="Feather" name="arrow-right-circle" style={styles.iconButton} />
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate('signup')}>
        <Text style={styles.link}>Dont have an account? SIGN UP</Text>
      </TouchableOpacity>
    </Content>
  )
}

const styles = StyleSheet.create({
  content: {
    width: '80%',
    marginTop: 50,
  },
  form: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#3C80D116',
    borderRadius: 20,
    paddingRight: 15,
    paddingBottom: 0
  },
  button: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    width: '100%',
    height: 60,
    backgroundColor: '#5468FF',
    borderRadius: 20,
  },
  textButton: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#FFF',
  },
  iconButton: {
    alignSelf: 'center',
    paddingVertical: 3,
    paddingLeft: 4,
    color: '#FFF', 
    fontSize: 28, 
    marginLeft: 10, 
    paddingHorizontal: 0, 
    marginRight:0
  },
  link: {
    paddingTop: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: 'rgba(52,67,86,0.4)'
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
})

export default AuthForm