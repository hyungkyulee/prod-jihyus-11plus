import React, { useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ProgressViewIOS
} from 'react-native'
import { 
  Content, 
  Card,
  CardItem,
  Input, 
  Item,
  Form,
  Button,
  Label,
  Icon,
  Left,
  Body,
  Right
} from 'native-base'

const AuthForm = ({ navigation, headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <Content style={styles.content}>
      <Card style={styles.card}>
        <CardItem cardBody>
          <Image 
            style={styles.image}
            source={require('../../assets/images/card-voca-learn.png')}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Text style={styles.title}>Vocabulary</Text>
              <Text note style={styles.subtitle}>Learning new words</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Text style={styles.text}>4 of 8 lessons</Text>
            </Body>
          </Left>
          <Right>
            <Body>
              <ProgressViewIOS
                style={styles.progress}
                progressTintColor=""
                progress={0.5}
              />
            </Body>
          </Right>
        </CardItem>
      </Card>
    </Content>
  )
}

const styles = StyleSheet.create({
  content: {
    width: '90%',
    margin: 0,
    padding: 0,
    alignSelf: 'center'
  },
  card: {
    // backgroundColor: '#FFFFFF',
    // shadowColor: '#3C80D116',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0
  },
  image: {
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  link: {
    paddingTop: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: 'rgba(52,67,86,0.4)'
  },
  title: {
    paddingTop: 30,
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#5468FF',
  },
  subtitle: {
    paddingBottom: 30,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#344356',
  },
  text: {
    paddingBottom: 20,
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    color: '#344356',
  },
  progress: {
    width: 100,
    height: 20,
  }
})

export default AuthForm