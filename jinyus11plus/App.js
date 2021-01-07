import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {AuthContext} from './src/contexts/AuthContext'
import AsyncStorage from '@react-native-async-storage/async-storage'

import SplashScreen from './src/screens/SplashScreen'
import HomeScreen from './src/screens/HomeScreen'
import SignInScreen from './src/screens/SignInScreen'
import SignUpScreen from './src/screens/SignUpScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import { startDetecting } from 'react-native/Libraries/Utilities/PixelRatio'
import LoadingScreen from './src/screens/Loading'
import VocaBasicScreen from './src/screens/VocaBasicScreen'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()
function mainFlow() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Study" component={ProfileScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: true,
          }
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          }
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          }
        case 'LOADING_COMPLETED':
          return {
            ...prevState,
            isLoading: false,
          }
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken

      try {
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken })
    }

    bootstrapAsync()

    setTimeout(() => {
      dispatch({ type: 'LOADING_COMPLETED' })
    }, 2000)
  }, [])

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  )

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.isLoading ? (
            <>
              <Stack.Screen
                name="loading"
                component={LoadingScreen}
                options={{
                  headerShown: false,
                }}
              />
            </>
          ) : (
          state.userToken == null ? (
            <>
              <Stack.Screen
                name="signin"
                component={SignInScreen}
                options={{
                  title: 'Log In',
                  headerStyle: {
                    backgroundColor: '#F3F5F9',
                    shadowColor: 'transparent'
                  },
                  headerTintColor: '#344356',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20
                  },
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push'
                }}
              />
              <Stack.Screen
                name="signup"
                component={SignUpScreen}
                options={{
                  title: 'Sign Up',
                  headerStyle: {
                    backgroundColor: '#F3F5F9',
                    shadowColor: 'transparent'
                  },
                  headerTintColor: '#344356',
                  headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 20
                  },
                  animationTypeForReplace: state.isSignout ? 'pop' : 'push'
                }}
              />
            </>
            ) : (
              <>
                <Stack.Screen 
                  name="splash" 
                  component={SplashScreen} 
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen 
                  name="main" 
                  component={mainFlow} 
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen 
                  name="vocalearn-b1" 
                  component={VocaBasicScreen} 
                  options={{
                    headerShown: false,
                  }}
                />
              </>
            )
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default App;