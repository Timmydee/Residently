import React, { useState } from 'react'
import { SafeAreaView, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'
import { styles } from './loginStyles'

type Props = {
  navigation: StackNavigationProp<any>
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isPassFocus, setIsPassFocus] = useState(false);

  // function to validate email
  const validateEmail = (email: string) => {
    if (!email) {
      setEmailError("Email is required")
      return false
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
      return false;
    }
    setEmailError("")
    return true
  }

  // function to validate password
  const validatePassword = (password: any) => {
    if (!password) {
      setPasswordError("Password is required")
      return false
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      return false;
    }
    setPasswordError("")
    return true
  }

  // Function to handle form submission
  const handleSubmit = () => {
    const validEmail = validateEmail(email)
    const validPassword = validatePassword(password)

    if (validEmail && validPassword) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        navigation.navigate('UserList');
      }, 1000)
    }

  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <KeyboardAvoidingView style={styles.signUp}>
          <View style={styles.imageCol}>
            <Image source={(require('../../../assets/Residential.png'))} />
          </View>
          <View style={styles.TextCol}>
            <Text style={styles.H1}>Welcome!</Text>
            <Text style={styles.p}>Sign up or log in to your account to manage access to your users smartly.</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.Input}>
              <Image source={(require('../../../assets/mail.png'))} />
              <TouchableOpacity onPress={() => setIsFocused(true)} disabled={isFocused}>
                {isFocused || email ? (
                  <View style={styles.emailInput}>
                    <Text style={styles.placeholderText}>Email Address</Text>
                    <TextInput
                      style={styles.textInput}
                      onChangeText={setEmail}
                      value={email}
                      keyboardType="email-address"
                      autoCapitalize="none"
                    />
                  </View>
                ) :
                  <Text style={styles.placeholderText}>Email Address</Text>
                }
              </TouchableOpacity>
            </View>
            {!!emailError && <Text style={styles.error}>{emailError}</Text>}

            <View style={[styles.Input, styles.inputPass]}>
              <View style={styles.passInput}>
                <Image source={(require('../../../assets/password.png'))} />
                <TouchableOpacity onPress={() => setIsPassFocus(true)}>
                  {isPassFocus || email ? (
                    <View style={styles.emailInput}>
                      <Text style={styles.placeholderText}>Password</Text>
                      <TextInput
                        style={styles.textInput}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry
                      />
                    </View>
                  ) :
                    <Text style={styles.placeholderText}>Password</Text>
                  }
                </TouchableOpacity>
              </View>
              {!isPassFocus &&
                <Text style={styles.forgotPass}>Forgot?</Text>
              }

            </View>
            {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}
          </View>
          <View style={styles.btnCol}>
            {loading ? (
              <ActivityIndicator animating={true} color='#FF8600' />
            ) :
              <TouchableOpacity onPress={handleSubmit} style={styles.btnLogin}>
                <Text style={styles.btnLoginText}>Login</Text>
              </TouchableOpacity>
            }
          </View>

          <Text style={{ color: '#FF8600', fontFamily:'Satoshi-Regular', fontSize:14 }}>Sign up <Text style={{ color: '#6E717C' }}>instead</Text> </Text>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>

  )
}

export default LoginScreen
