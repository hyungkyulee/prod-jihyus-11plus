import React from 'react'
import {
  View, 
  Text,
  Button,
} from 'react-native'

const SplashScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Splash screen</Text>
      {/* <Button
        title="START"
        onPress={() => navigation.navigate('signin')}
      /> */}
    </View>
  )
}

export default SplashScreen
