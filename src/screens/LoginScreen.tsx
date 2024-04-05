import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, KeyboardAvoidingView, TouchableOpacity, ActivityIndicator } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  navigation: StackNavigationProp<any>
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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
            <Image source={(require('../../assets/Residential.png'))} />
          </View>
          <View style={styles.TextCol}>
            <Text style={styles.H1}>Welcome!</Text>
            <Text style={styles.p}>Sign up or log in to your account to manage access to your users smartly.</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.Input}>
              <Image source={(require('../../assets/mail.png'))} />
              <TextInput
                style={styles.textInput}
                onChangeText={setEmail}
                value={email}
                placeholder="Email Address"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            {!!emailError && <Text style={styles.error}>{emailError}</Text>}

            <View style={[styles.Input, styles.inputPass]}>
              <View style={styles.passInput}>
                <Image source={(require('../../assets/password.png'))} />
                <TextInput
                  style={styles.textInput}
                  onChangeText={setPassword}
                  value={password}
                  placeholder="Password"
                  secureTextEntry
                />
              </View>
              <Text style={styles.forgotPass}>Forgot?</Text>
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

          <Text style={{ color: '#FF8600' }}>Sign up <Text style={{ color: '#6E717C' }}>instead</Text> </Text>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>

  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    color: 'black',
  },
  signUp: {
    marginTop: '15%',
    alignItems: 'center'
  },
  imageCol: {
    width: '80%',
  },
  TextCol: {
    marginTop: 50,
    alignItems: 'center'
  },
  H1: {
    fontSize: 32,
    marginBottom: 10,
    fontFamily: 'Satoshi-Bold',
    color: '#322B8C'
  },
  p: {
    width: 293,
    fontSize: 16,
    marginBottom: 10,
    color: 'gray',
    textAlign: 'center',
    lineHeight: 26,
    fontFamily: 'Satoshi-Medium'
  },
  form: {
    marginTop: 30,
    width: '100%',
  },
  Input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    width: 325,
    height: 56,
    borderWidth: 0.5,
    color: 'black',
    marginVertical: 10,
    borderRadius: 16,
    paddingHorizontal: 16,
    backgroundColor: '#F9FAFC',
    borderColor: '#EFF2F7'
  },
  error:{
    fontSize: 12,
    color: '#FF8600'
  },
  textInput:{
    width: '70%'
  },
  inputPass: {
    justifyContent: 'space-between'
  },
  passInput: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  forgotPass: {
    textAlign: 'right',
    color: '#FF8600',
    fontSize: 14,
    fontFamily: 'Satoshi-Regular'
  },
  btnCol: {
    alignItems: 'center',
    marginTop: 70,
    marginBottom: 10,
  },
  btnLogin: {
    borderWidth: 0,
    borderRadius: 8,
    backgroundColor: '#FF8600',
    width: 325,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnLoginText: {
    fontSize: 16,
    fontFamily: 'Satoshi-Bold',
    color: '#ffffff',
  }
})
