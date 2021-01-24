import React, {useEffect, useCallback} from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native'
import SafariView from 'react-native-safari-view'
import InAppBrowser from 'react-native-inappbrowser-reborn'
import Url from 'url'

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
const HOST_URI = "https://jinyus-dev-dintent.auth.eu-west-1.amazoncognito.com"
const CLIENT_ID = "5bsi426ui1lemdn9i0e3a1nt2a&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile"
const loginURL = `${HOST_URI}/login?client_id=${CLIENT_ID}&redirect_uri=http://localhost:8081`

const SplashScreen = ({navigation}) => {

  const getDeepLink = (path = "") => {
    const scheme = 'jinyusapp'
    const prefix = Platform.OS == 'android' ? `${scheme}://my-host/` : `${scheme}://`
    return prefix + path
  }

  const onLogin = async () => {
    const deepLink = getDeepLink("callback")
    const url = `${HOST_URI}/login?client_id=${CLIENT_ID}&redirect_uri=${deepLink}` 
    try {
      await InAppBrowser.isAvailable()
      InAppBrowser.openAuth(url, deepLink, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        // Android Properties
        showTitle: false,
        enableUrlBarHiding: true,
        enableDefaultShare: true,
      }).then((response) => {
        console.log(">>> ", response)
        if (response.type === 'success' && 
          response.url) {
          /* store the id_token */
          const id_token = Url.parse(response.url).hash.slice("#id_token=".length)
          console.log(id_token)
          Linking.openURL(response.url)
        }
      })
    } catch (error) {
      Linking.openURL(url)
    }
  }

  return (
    <Container style={styles.container}>
      <Grid>
        <Row size={2} style={styles.rowImage}>
          <Image 
            style={styles.image}
            source={require('../../assets/images/splash.png')}
          />
        </Row>
        <Row size={1} style={styles.rowTagline}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.text}>Learn 11+ vocabulary</Text>
          <Text style={styles.text}>with Jinyus!</Text>
        </Row>
        <Row size={1} style={styles.rowButton}>
          <Button 
            iconRight
            style={styles.button} 
            onPress={() => onLogin()}
            // onPress={() => navigation.navigate('main')}
          >
            <Text style={styles.textButton}>START</Text>
            <Icon type="Feather" name="arrow-right-circle" style={styles.iconButton} />
          </Button>
          <TouchableOpacity onPress={() => console.log('contact us')}>
            <Text style={styles.link}>CONTACT US</Text>
          </TouchableOpacity>
        </Row>
      </Grid>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#F3F5F9',
  },
  rowImage: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  rowTagline: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowButton: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  image: {
    width: 240,
    height: 240,
    // resizeMode: '',
  },
  title: {
    paddingVertical: 7,
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
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

export default SplashScreen
