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
  Icon
} from 'native-base'

import { 
  Grid,
  Row
} from 'react-native-easy-grid'

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const LoadingScreen = () => {
  return (
    <Container style={styles.container}>
      <Grid>
        <Row size={1} style={styles.row}>
          {/* <Image 
            style={styles.image}
            source={require('../../assets/images/splash.png')}
          /> */}
          <Text style={styles.link}>LOADING ...</Text>
        </Row>
      </Grid>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F3F5F9',
  },
  row: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    paddingTop: 20,
    fontFamily: 'Montserrat-SemiBoldItalic',
    fontSize: 16,
    color: 'rgba(52,67,86,0.4)'
  }
})

export default LoadingScreen
