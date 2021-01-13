import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  Image,
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

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MatchingWordGame = ({navigation}) => {
  const [answer, setAnswer] = useState('')
  
  return (
    <Container style={styles.container}>
      <TouchableOpacity onPress={() => console.log('contact us...')}>
        <Icon type="Feather" name="x" style={styles.iconButton} />
      </TouchableOpacity>
      <Grid style={styles.card}>
        <Row size={1} style={styles.rowQuestion}>
          <Text style={styles.markText((answer==='B')?true:false)}>{(answer==='B')?'PASS':'FALED'}</Text>
        </Row>
        <Row size={6} style={styles.rowQuestion}>
          <Text style={styles.questionText}>How many basic steps are there in The Scientific Method?</Text>
        </Row>
        <Row size={1} style={styles.rowButton}>
          <Button 
            iconRight
            style={styles.answerButton((answer==='A')?true:false)} 
            onPress={() => setAnswer('A')}>
            <Text style={styles.answerButtonText((answer==='A')?true:false)}>A. Eight Steps</Text>
          </Button>
        </Row>
        <Row size={1} style={styles.rowButton}>
          <Button 
            iconRight
            style={styles.answerButton((answer==='B')?true:false)} 
            onPress={() => setAnswer('B')}>
            <Text style={styles.answerButtonText((answer==='B')?true:false)}>B. Five Steps</Text>
          </Button>
        </Row>
        <Row size={1} style={styles.rowButton}>
          <Button 
            iconRight
            style={styles.answerButton((answer==='C')?true:false)} 
            onPress={() => setAnswer('C')}>
            <Text style={styles.answerButtonText((answer==='C')?true:false)}>C. Ten Steps</Text>
          </Button>
        </Row>
      </Grid>
      {/* <Grid>
        <Row style={styles.rowButton}> */}
          <Button 
            iconRight
            style={styles.progressButton} 
            onPress={() => navigation.navigate('main')}>
            <Text style={styles.progressButtonText}>CONTINUE</Text>
            <Icon type="Feather" name="arrow-right-circle" style={styles.startIconButton} />
          </Button>
        {/* </Row>
      </Grid> */}
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F3F5F9',
  },
  card: {
    alignSelf: 'center',
    padding: 20,
    marginVertical: 40,
    width: '80%',
    height: '60%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#3C80D116',
    borderRadius: 20,
    shadowOffset: {width: 15, height: 20},
    shadowRadius: 10,
    shadowOpacity: 20,
  },
  rowQuestion: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowButton: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  questionText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: '#344356',
    textAlign: 'center',
    lineHeight: 45
  },
  markText: (isCorrect) => {
    return {
      fontFamily: 'Montserrat-Bold',
      fontSize: 30,
      color: (isCorrect)?'#00D9CD':'#ec5252',
      textAlign: 'center',
      lineHeight: 45
    }
  },
  answerButton: (isSelected) => {
    return {
      alignSelf: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '85%',
      height: 60,
      backgroundColor: (isSelected)?'#00D9CD':'transparent',
      borderRadius: 20,
      borderWidth: 1,
      borderColor: (isSelected)?'transparent':'#E8EEF4',
      paddingHorizontal:20,
    }
  },
  answerButtonText: (isSelected) => {
    return {
      fontFamily: (isSelected)?'Montserrat-Bold':'Montserrat-Light',
      fontSize: 16,
      color: (isSelected)?'#FFFFFF':'#344356',
    }
  },
  progressButton: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
    height: 60,
    backgroundColor: '#5468FF',
    borderRadius: 20,
    marginBottom: 60,
  },
  progressButtonText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: '#FFF',
  },
  startIconButton: {
    alignSelf: 'center',
    paddingVertical: 3,
    paddingLeft: 4,
    color: '#FFF', 
    fontSize: 28, 
    marginLeft: 10, 
    paddingHorizontal: 0, 
    marginRight:0
  }
})

export default MatchingWordGame
