import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { 
  Container, 
  Button,
  Icon
} from 'native-base'

import { 
  Grid,
  Row
} from 'react-native-easy-grid'

import AuthForm from "../components/AuthForm"

import {AuthContext} from '../contexts/AuthContext'

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { signIn } = React.useContext(AuthContext)

  return (
    <Container style={styles.container}>
      <Grid>
        <Row size={15} style={styles.rowTagline}>
          <Text style={styles.text}>Enter your login details to</Text>
          <Text style={styles.text}>access your account</Text>
        </Row>
        {/* <Row size={85} style={styles.rowBody}>
          <AuthForm
            navigation={navigation}
            headerText="Sign In to your Acoount"
            errorMessage=""
            onSubmit={() => signIn({ username, password })}
            submitButtonText="Sign In"
          />
        </Row> */}
        <Row size={85} style={styles.rowBody}>
          
        </Row>
      </Grid>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F5F9'
  },
  rowTagline: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowBody: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowButton: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    paddingVertical: 2,
    fontFamily: 'Montserrat-Light',
    fontSize: 20,
    color: '#344356',
  },
  button: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
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
  }
})

export default SignInScreen
