import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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
      fontFamily: 'Satoshi-Regular'
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
    emailInput: {
      flex: 1,
      gap: 5,
      justifyContent: 'center'
    },
    placeholderText: {
      color: '#6E717C',
      fontSize: 12,
      fontFamily: 'Satoshi-Regular'
    },
    error: {
      fontSize: 12,
      color: '#FF8600'
    },
    textInput: {
      width: 'auto',
      maxWidth: '100%',
      fontFamily: 'Satoshi-Medium',
      fontSize: 16,
      color: '#25292D'
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
  