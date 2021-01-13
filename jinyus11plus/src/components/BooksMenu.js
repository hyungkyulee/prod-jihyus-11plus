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

const BooksMenu = ({ navigation, book}) => {

  return (
    <Content style={styles.content}>
      <Card style={styles.card}>
        <CardItem cardBody style={styles.card}>
          <Image 
            style={styles.image}
            source={require('../../assets/images/card-voca-learn.png')}
          />
        </CardItem>
        <CardItem style={styles.card}>
          <Body>
          <Text style={styles.title}>{book.class}</Text>
          <Text note style={styles.text}>{book.title}</Text>
          </Body>
        </CardItem>
      </Card>
    </Content>
  )
}

const styles = StyleSheet.create({
  content: {
    width: 140,
    height: 140,
    alignSelf: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 0,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderWidth: 0,
  },
  image: {
    width: '100%',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 0,
  },
  link: {
    paddingTop: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: 'rgba(52,67,86,0.4)'
  },
  title: {
    paddingTop: 5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: '#5468FF',
  },
  text: {
    paddingBottom: 5,
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    color: '#344356',
  }
})

export default BooksMenu