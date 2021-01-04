import React from 'react'
import {
  View, 
  Text,
  Button,
} from 'react-native'

import {AuthContext} from '../contexts/AuthContext'

const MainScreen = ({navigation}) => {
  const { signOut } = React.useContext(AuthContext)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main</Text>
      <Button
        title="Go to Main... again"
        onPress={() => navigation.push('main')}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('splash')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to SPLASH screen in stack"
        onPress={() => navigation.popToTop()}
      />
      <Text>----- Signed in! -----</Text>
      <Button title="Sign out" onPress={signOut} />
    </View>
  )
}

export default MainScreen
