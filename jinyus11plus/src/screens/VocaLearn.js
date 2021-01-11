import React from 'react'
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import { 
  Container, 
  Button,
  Icon,
  Item,
  Input,
  Segment,
  Content,
  Card,
  CardItem,
  Right
} from 'native-base'

import { 
  Grid,
  Row
} from 'react-native-easy-grid'

import {AuthContext} from '../contexts/AuthContext'
import CardSlide from '../components/CardSlide'

const VocaLearn = ({navigation}) => {
  const { signOut } = React.useContext(AuthContext)

  return (
    <Container style={styles.container}>
      <Grid>
        <Row size={1} style={styles.rowInnerMenu}>
          <Segment>
            <Button first active>
              <Text>ALL</Text>
            </Button>
            <Button>
              <Text>AWARD</Text>
            </Button>
            <Button last>
              <Text>REVIEW</Text>
            </Button>
          </Segment>
        </Row>
        <Row size={2} style={styles.rowCourse}>
          <Content padder>
            <Text>Basic Vocabulary</Text>
          </Content>
        </Row>
        <Row size={3} style={styles.rowStage}>
          <Content style={styles.stages}>
            <Card>
              <CardItem>
                <Icon active type="Entypo" name="check" />
                <Text>Basic 01</Text>
                <Right>
                  <Icon type="Feather" name="arrow-right-circle" style={styles.startIcon} />
                </Right>
              </CardItem>
              <CardItem>
                <Icon active type="Entypo" name="dot-single" />
                <Text>Basic 02</Text>
                <Right>
                  <Icon type="Feather" name="arrow-right-circle" style={styles.startIcon} />
                </Right>
              </CardItem>
              <CardItem>
                <Icon active type="Entypo" name="dot-single" />
                <Text>Basic 03</Text>
                <Right>
                  <Icon type="Feather" name="arrow-right-circle" style={styles.startIcon} />
                </Right>
              </CardItem>
            </Card>
          </Content>
        </Row>
      </Grid>
    </Container>

    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Main</Text>
    //   <Button
    //     title="Go to Main... again"
    //     onPress={() => navigation.push('main')}
    //   />
    //   <Button title="Go to Home" onPress={() => navigation.navigate('splash')} />
    //   <Button title="Go back" onPress={() => navigation.goBack()} />
    //   <Button
    //     title="Go back to SPLASH screen in stack"
    //     onPress={() => navigation.popToTop()}
    //   />
    //   <Text>----- Signed in! -----</Text>
    //   <Button title="Sign out" onPress={signOut} />
    // </View>
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
  rowCourse: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  rowStage: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stages: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#3C80D116',
    borderRadius: 20,
  },
  startIcon: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5468FF',
    shadowColor: '#3C80D116',
    shadowOffset: {width: 0, height: 12},
    shadowRadius: 10,
    shadowOpacity: 20,
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
  subtitle: {
    paddingBottom: 0,
    marginBottom: 10,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#344356',
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

export default VocaLearn
