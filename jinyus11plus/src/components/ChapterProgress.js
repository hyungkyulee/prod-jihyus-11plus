import React, { useParams, useEffect, useState }  from 'react'
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native'

import { 
  Container, 
  Button,
  Icon,
  Card,
  CardItem,
  Right,
  Tabs,
  Tab,
  ScrollableTab,
  TabHeading,
} from 'native-base'

import { 
  Grid,
  Row,
  Col
} from 'react-native-easy-grid'

const SpaceRowWithProgressBar = () => {
  return (
    <Row size={10}>
      <Col size={2}>
        <Text style={styles.progressLine}>|</Text>
      </Col>
      <Col size={8}>
        
      </Col>
    </Row>
  )
}

const ChapterProgress = ({navigation, id}) => {
  const [book, setBook] = useState({})

  useEffect(() => {
    (async () => {
      try {
        // const response = await fetch(`${config.API_HOST}/announcements`)
        const response = await fetch(`https://h6wan8jdtk.execute-api.eu-west-1.amazonaws.com/dev/books/${id}`)
        const json = await response.json()
        setBook(json.data)
      } catch (error) {
        console.log('error: ', error)
      }
    })()
  }, [id])

  return (
    <Grid style={styles.card}>
      <Row size={10}>
        <Col size={2} style={styles.row}>
          <Icon active type="Entypo" name="circle" style={styles.titleIcon} />
        </Col>
        <Col size={8} style={styles.row}>
          {/* <Text style={styles.cardTitle}>{book.class} - {book.title}</Text> */}
          <Text style={styles.cardTitle}>{book.id}</Text>
        </Col>
      </Row>
      <SpaceRowWithProgressBar />
      <Row size={10}>
        <Col size={2} style={styles.row}>
          <Icon active type="Entypo" name="check" style={styles.progressIcon} />
        </Col>
        <Col size={6} style={styles.row}>
          <Text style={styles.text} >{book.chapter}</Text>
        </Col>
        <Col size={2} style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('mwgame')}>
            <Icon type="Feather" name="arrow-right-circle" style={styles.startIcon} />
          </TouchableOpacity>
        </Col>
      </Row>
      <SpaceRowWithProgressBar />
      <Row size={10}>
        <Col size={2} style={styles.row}>
          <Icon active type="Octicons" name="primitive-dot" style={styles.progressIcon} />
        </Col>
        <Col size={6} style={styles.row}>
          <Text style={styles.text} >{book.chapter}</Text>
        </Col>
        <Col size={2} style={styles.row}>
          <Icon type="Feather" name="arrow-right-circle" style={styles.startIcon} />
        </Col>
      </Row>
      <SpaceRowWithProgressBar />
      <Row size={10}>
        <Col size={2} style={styles.row}>
          <Icon active type="Octicons" name="primitive-dot" style={styles.progressIcon} />
        </Col>
        <Col size={6} style={styles.row}>
          <Text style={styles.text} >{book.chapter}</Text>
        </Col>
        <Col size={2} style={styles.row}>
          <Icon type="Feather" name="arrow-right-circle" style={styles.startIcon} />
        </Col>
      </Row>
      <SpaceRowWithProgressBar />
      <Row size={10}>
        <Col size={2} style={styles.row}>
          <Icon active type="Octicons" name="primitive-dot" style={styles.progressIcon} />
        </Col>
        <Col size={6} style={styles.row}>
          <Text style={styles.text} >{book.chapter}</Text>
        </Col>
        <Col size={2} style={styles.row}>
          <Icon type="Feather" name="arrow-right-circle" style={styles.startIcon} />
        </Col>
      </Row>
      <SpaceRowWithProgressBar />
      <Row size={10}>
        <Col size={2} style={styles.row}>
          <Icon active type="Octicons" name="primitive-dot" style={styles.progressIcon} />
        </Col>
        <Col size={6} style={styles.row}>
          <Text style={styles.text} >{book.chapter}</Text>
        </Col>
        <Col size={2} style={styles.row}>
          <Icon type="Feather" name="arrow-right-circle" style={styles.startIcon} />
        </Col>
      </Row>
      <SpaceRowWithProgressBar />
      <Row size={10}>
        <Col size={2} style={styles.row}>
          <Icon active type="Octicons" name="primitive-dot" style={styles.progressIcon} />
        </Col>
        <Col size={6} style={styles.row}>
          <Text style={styles.text} >{book.chapter}</Text>
        </Col>
        <Col size={2} style={styles.row}>
          <Icon type="Feather" name="arrow-right-circle" style={styles.startIcon} />
        </Col>
      </Row>
    </Grid>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F3F5F9',
  },
  rowInnerMenu: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  card: {
    alignSelf: 'center',
    padding: 20,
    marginTop: 20,
    width: '80%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#3C80D116',
    borderRadius: 20,
  },
  progressIcon: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00D9CD',
    alignSelf: 'center'
  },
  progressLine: {
    fontSize: 30,
    fontFamily: 'Montserrat-Thin',
    color: '#00D9CD',
    alignSelf: 'center'
  },
  titleIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#00D9CD',
    alignSelf: 'center'
  },
  startIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5468FF',
  },
  image: {
    width: 240,
    height: 240,
    // resizeMode: '',
  },
  title: {
    paddingVertical: 7,
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: '#344356',
  },
  cardTitle: {
    paddingBottom: 0,
    marginBottom: 0,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#5468FF',
  },
  text: {
    paddingVertical: 2,
    fontFamily: 'Montserrat-Medium',
    fontSize: 20,
    color: '#344356',
  },
  button: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 160,
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

export default ChapterProgress